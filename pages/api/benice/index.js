import Cors from 'cors'
import connectDB from '../../../utils/db'
import Birthday from '../../../models/Birthday'
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
        const posts = await Birthday.find().sort({ createdAt: -1 })
        res.json({
            status: 'success',
            posts
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createPost = async (req, res) => {
    try {

        const {name, body} = req.body

        if(!name || !body )
        return res.status(400).json({err: 'Please add all the fields.'})

        const newPost = new Birthday({
            name, 
            body
        })

        await newPost.save()

        res.json({
            msg: 'Success!'
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}
