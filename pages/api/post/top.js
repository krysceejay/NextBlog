import connectDB from '../../../utils/db'
import Post from '../../../models/Post'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getTopPosts(req, res)
            break;   
    }
}

const getTopPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).limit(3)
        res.json({
            status: 'success',
            posts
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}