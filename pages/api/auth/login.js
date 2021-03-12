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
            await login(req, res)
            break;
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if(!user) return res.status(400).json({err: 'Incorrect email or password.'})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Incorrect email or password.'})

        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})
        
        res.json({
            msg: "Login Success!",
            refresh_token,
            access_token,
            user: {
                id: user._id,
                name: user.fullName,
                email: user.email,
                isAdmin: user.isAdmin,
                avatar: user.avatar,
                emailVerified: user.emailVerified
            }
        })

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}