import Cors from 'cors'
import connectDB from '../../../../utils/db'
import Post from '../../../../models/Post'
import auth from '../../../../middleware/auth'
import initMiddleware from '../../../../middleware/initMiddleware'

connectDB()

const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )

export default async (req, res) => {
    await cors(req, res)
    switch(req.method){
        case "GET":
            await getAllPosts(req, res)
            break;   
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate('user')
        res.json({
            status: 'success',
            result: posts.length,
            posts
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

