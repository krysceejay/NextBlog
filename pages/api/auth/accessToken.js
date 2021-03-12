import Cors from 'cors'
import jwt from 'jsonwebtoken'
import connectDB from '../../../utils/db'
import User from '../../../models/User'
import { createAccessToken } from '../../../utils/generateToken'
import initMiddleware from '../../../middleware/initMiddleware'

connectDB()

const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )

export default async (req, res) => {
    await cors(req, res)
    try{
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return res.status(400).json({err: 'Please login now'})

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if(!result) return res.status(400).json({err: 'Your token is incorrect or has expired.'})

        const user = await User.findById(result.id)
        if(!user) return res.status(400).json({err: 'User does not exist.'})

        const access_token = createAccessToken({id: user._id})
        res.json({
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