import Cors from 'cors'
import connectDB from '../../../utils/db'
import Post from '../../../models/Post'
import auth from '../../../middleware/auth'
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
            await getPosts(req, res)
            break;

        case "POST":
            await createPost(req, res)
            break;    
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({show: true}).sort({ createdAt: -1 }).populate('user')
        res.json({
            status: 'success',
            result: posts.length,
            posts
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createPost = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(!result.isAdmin) return res.status(400).json({err: 'Authentication is not valid.'})

        const {title, excerpt, body, category, postImg, show} = req.body

        if(!title || !excerpt || !body || !postImg || category.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})


        const newPost = new Post({
            user: result.id, title, excerpt, body, category, postImg, show
        })

        await newPost.save()

        res.json({msg: 'Success! Created a new post'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}
