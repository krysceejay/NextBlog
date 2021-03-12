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
            await getLikes(req, res)
            break;   
        case "POST":
            await likePost(req, res)
            break;     
        }
}

const getLikes = async (req, res) => {
    try {
        const { id } = req.query;
        const post = await Post.findById(id)
             .select('likes')

        res.json({ likes: post.likes })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const likePost = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.err) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const post = await Post.findById(id)
        if(!post) return res.status(400).json({err: 'This post does not exist.'})

        // Check if the post has already been liked
        if (post.likes.some(like => like.user.toString() === result.id.toString())) {
            // remove the like
            post.likes = post.likes.filter(
                ({ user }) => user.toString() !== result.id.toString()
            )
        }else{
            //like post
            post.likes.unshift({ user: result.id })
        }

        const updatePost = await post.save()
        
        res.json({
            msg: 'Success!',
            like: updatePost.likes
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}