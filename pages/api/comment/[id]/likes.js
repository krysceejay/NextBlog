import connectDB from '../../../../utils/db'
import Comment from '../../../../models/Comment'
import auth from '../../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getLikes(req, res)
            break;   
        case "POST":
            await likeComment(req, res)
            break;     
        }
}

const getLikes = async (req, res) => {
    try {
        const { id } = req.query;
        const comment = await Comment.findById(id)
             .select('likes')

        res.json({ likes: comment.likes })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const likeComment = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.err) return res.status(400).json({err: 'Authentication is not valid.'})
        const { id } = req.query
        const comment = await Comment.findById(id)
        if(!comment) return res.status(400).json({err: 'This comment does not exist.'})

        // Check if the comment has already been liked
        if (comment.likes.some(like => like.user.toString() === result.id.toString())) {
            // remove the like
            comment.likes = comment.likes.filter(
                ({ user }) => user.toString() !== result.id.toString()
            )
        }else{
            //like comment
            comment.likes.unshift({ user: result.id })
        }

        const updateComment = await comment.save()
        
        res.json({
            msg: 'Success!',
            comment: updateComment
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}