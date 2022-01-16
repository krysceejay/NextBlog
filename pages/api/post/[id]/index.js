import Cors from 'cors'
import connectDB from '../../../../utils/db'
import Post from '../../../../models/Post'
import initMiddleware from '../../../../middleware/initMiddleware'
import auth from '../../../../middleware/auth'

connectDB()

const cors = initMiddleware(
    Cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  )

export default async (req, res) => {
    await cors(req, res)
    switch(req.method){
        case "GET":
            await getPost(req, res)
            break;

        case "PUT":
            await editPost(req, res)
            break;

        case "DELETE":
            await deletePost(req, res)
            break;
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.query

        const post = await Post.findById(id).populate('user')
        if(!post) return res.status(400).json({err: 'This post does not exist.'})
        
        res.json({ post })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const editPost = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(!result.isAdmin) return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const {title, excerpt, body, category, postImg, show} = req.body

        if(!title || !excerpt || !body || !postImg || category.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})

        await Post.findOneAndUpdate({_id: id}, {
            title, excerpt, body, category, postImg, show
        })

        res.json({msg: 'Success! Updated a post'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deletePost = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(!result.isAdmin) 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await Post.findByIdAndDelete(id)
        res.json({msg: 'Deleted a post.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}