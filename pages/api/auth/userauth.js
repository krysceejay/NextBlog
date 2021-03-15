import bcrypt from 'bcryptjs'
import Cors from 'cors'
import connectDB from '../../../utils/db'
import User from '../../../models/User'
import initMiddleware from '../../../middleware/initMiddleware'
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken'

connectDB()

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )

export default async (req, res) => {
    // Run cors
    await cors(req, res)
    switch(req.method){
        case "POST":
            await userAuth(req, res)
            break;
    }
}

const userAuth = async (req, res) => {
    try{
        let access_token
        let refresh_token
        let userObj

        const { email, name, imageUrl, accountId, platform } = req.body
        const user = await User.findOne({ email })

        if(!user) {
            //Register User
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(process.env.USER_PASS, salt)

            const newUser = new User({ 
                fullName: name, 
                email, 
                password: hashPassword,
                platform,
                accountId,
                avatar: imageUrl,
                emailVerified: true,
                status: true
            })

            const newuser = await newUser.save()
            access_token = createAccessToken({id: newuser._id})
            refresh_token = createRefreshToken({id: newuser._id})
            userObj = {
                id: newuser._id,
                name: newuser.fullName,
                email: newuser.email,
                isAdmin: newuser.isAdmin,
                avatar: newuser.avatar,
                emailVerified: newuser.emailVerified
            }
        }else {
            //Login User
            const isMatch = await bcrypt.compare(process.env.USER_PASS, user.password)
            if(!isMatch) return res.status(400).json({err: 'Incorrect email or password.'})

            access_token = createAccessToken({id: user._id})
            refresh_token = createRefreshToken({id: user._id})
            userObj = {
                id: user._id,
                name: user.fullName,
                email: user.email,
                isAdmin: user.isAdmin,
                avatar: user.avatar,
                emailVerified: user.emailVerified
            }
        }
        res.json({
            msg: "Success!",
            refresh_token,
            access_token,
            user: userObj
        })
        
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}