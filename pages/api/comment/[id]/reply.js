import connectDB from '../../../../utils/db'
import Comment from '../../../../models/Comment'
import Reply from '../../../../models/Reply'
import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){  
        case "POST":
            await replyComment(req, res)
            break;     
        }
}

const replyComment = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.err) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const comm = await Comment.findById(id)
        if(!comm) return res.status(400).json({err: 'This comment does not exist.'})
        
        const {comment} = req.body
        if(!comment)
        return res.status(400).json({err: 'Please add a comment.'})

        const newReply = new Reply({
            user: result.id, 
            comment: comm._id, 
            body: comment
        })

        await newReply.save()
        comm.replies.push(newReply._id)
        await comm.save()

        const updateComment = await Comment.populate(comm, {
            path: 'replies',
            populate: { path: 'user' }
          })
        
        res.json({
            msg: 'Success! reply added',
            reply: updateComment.replies
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}