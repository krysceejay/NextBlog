import Cors from 'cors'
import connectDB from '../../../utils/db'
import Category from '../../../models/Category'
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
            await getCategories(req, res)
            break;

        case "POST":
            await addCategory(req, res)
            break;    
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 })
        res.json({
            status: 'success',
            categories
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const addCategory = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(!result.isAdmin) return res.status(400).json({err: 'Authentication is not valid.'})

        const {name} = req.body

        if(!name)
        return res.status(400).json({err: 'Please a category.'})


        const newCategory = new Category({name})

        await newCategory.save()

        res.json({msg: 'Success! Created a new category'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}
