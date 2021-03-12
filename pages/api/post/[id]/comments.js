import Cors from 'cors'
import connectDB from '../../../../utils/db'
import Post from '../../../../models/Post'
import Comment from '../../../../models/Comment'
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
            await getComments(req, res)
            break;   
        case "POST":
            await addComment(req, res)
            break;     
        }
}

const getComments = async (req, res) => {
    try {
        const { id } = req.query
        const comments = await Comment.find({ post: id })
                .populate('user')
                .populate({
                 path: 'replies',
                 populate: { path: 'user' }
                })

        res.json({ comments })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const addComment = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.err) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const post = await Post.findById(id)
        if(!post) return res.status(400).json({err: 'This post does not exist.'})
        
        const {comment} = req.body
        if(!comment)
        return res.status(400).json({err: 'Please add a comment.'})

        const newComment = new Comment({
            user: result.id, 
            post: post._id, 
            body: comment
        })

        await newComment.save()
        const addedComment = await Comment.populate(newComment, { path: 'user' })

        post.comments.push(addedComment._id)
        await post.save()
        
        res.json({
            msg: 'Success! Comment added',
            comment: addedComment
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}