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
        const comm = await Comment.findOne({"replies._id":  id}) 

        if(!comm.replies[0]) return res.status(400).json({err: 'This reply does not exist.'})

        // Check if the reply has already been liked
        if (comm.replies[0].likes.some(like => like.user.toString() === result.id.toString())) {
            // remove the like
            comm.replies[0].likes = comm.replies[0].likes.filter(
                ({ user }) => user.toString() !== result.id.toString()
            )
        }else{
            //like reply
            comm.replies[0].likes.unshift({ user: result.id })
        }
        const updateComment = await comm.save()

        const comment = await Comment.populate(updateComment, {
            path: 'replies',
            populate: { path: 'user' }
          })
        
        res.json({
            msg: 'Success!',
            cid: comment._id,
            reply: comment.replies
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}