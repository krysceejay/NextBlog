import Cors from 'cors'
import connectDB from '../../../utils/db'
import Post from '../../../models/Post'
import initMiddleware from '../../../middleware/initMiddleware'

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
            await getTopPosts(req, res)
            break;   
    }
}

const getTopPosts = async (req, res) => {
    try {
        const posts = await Post.find({show: true}).sort({ createdAt: -1 }).limit(3)
        res.json({
            status: 'success',
            posts
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}