import Cors from 'cors'
import connectDB from '../../../../../utils/db'
import Post from '../../../../../models/Post'
import auth from '../../../../../middleware/auth'
import initMiddleware from '../../../../../middleware/initMiddleware'

connectDB()

const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'PUT', 'OPTIONS']
    })
  )

export default async (req, res) => {
    await cors(req, res)
    switch(req.method){
        case "PUT":
            await showPost(req, res)
            break;        
        }
}

const showPost = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(!result.isAdmin) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const post = await Post.findById(id)
        if(!post) return res.status(400).json({err: 'This post does not exist.'})

        post.show = !post.show

        const updatePost = await post.save()
        
        res.json({
            msg: 'Success!',
            show: updatePost.show
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}