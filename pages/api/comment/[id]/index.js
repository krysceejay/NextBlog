import connectDB from '../../../../utils/db'
import Comment from '../../../../models/Comment'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getComment(req, res)
            break;
    }
}

const getComment = async (req, res) => {
    try {
        const { id } = req.query;

        const comment = await Comment.findById(id)
        if(!comment) return res.status(400).json({err: 'This comment does not exist.'})
        
        res.json({ comment })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}