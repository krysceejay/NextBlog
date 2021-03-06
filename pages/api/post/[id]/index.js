import Cors from 'cors'
import connectDB from '../../../../utils/db'
import Post from '../../../../models/Post'
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
            await getPost(req, res)
            break;
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.query;

        const post = await Post.findById(id)
        if(!post) return res.status(400).json({err: 'This post does not exist.'})
        
        res.json({ post })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}