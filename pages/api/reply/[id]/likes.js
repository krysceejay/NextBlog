import connectDB from '../../../../utils/db'
import Comment from '../../../../models/Comment'
import Reply from '../../../../models/Reply'
import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){  
        case "POST":
            await likeReply(req, res)
            break;     
        }
}

const likeReply = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.err) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const reply = await Reply.findById(id)
        if(!reply) return res.status(400).json({err: 'This reply does not exist.'})

        // Check if the reply has already been liked
        if (reply.likes.some(like => like.user.toString() === result.id.toString())) {
            // remove the like
            reply.likes = reply.likes.filter(
                ({ user }) => user.toString() !== result.id.toString()
            )
        }else{
            //like reply
            reply.likes.unshift({ user: result.id })
        }
        const updateReply = await reply.save()

        const comment = await Comment.findById(updateReply.comment)

        const updateComment = await Comment.populate(comment, {
            path: 'replies',
            populate: { path: 'user' }
          })
        
        res.json({
            msg: 'Success!',
            reply: updateComment.replies
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}