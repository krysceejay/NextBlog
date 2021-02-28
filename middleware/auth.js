import jwt from 'jsonwebtoken'
import User from '../models/User'


const auth = async (req, res) => {
    const token = req.headers.authorization;
    if(!token) return res.status(400).json({err: 'Invalid Authentication.'})

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded) return res.status(400).json({err: 'Invalid Authentication.'})

    const user = await User.findOne({_id: decoded.id})

    return {id: user._id, isAdmin: user.isAdmin};
}


export default auth