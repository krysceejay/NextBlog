import Cors from 'cors'
import connectDB from '../../../../utils/db'
import Comment from '../../../../models/Comment'
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