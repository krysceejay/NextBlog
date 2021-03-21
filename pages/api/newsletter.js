import Cors from 'cors'
import connectDB from '../../utils/db'
import Email from '../../models/Email'
import initMiddleware from '../../middleware/initMiddleware'

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
            await getEmails(req, res)
            break;

        case "POST":
            await addEmail(req, res)
            break;    
    }
}

const getEmails = async (req, res) => {
    try {
        const emails = await Email.find().sort({ createdAt: -1 })
        res.json({
            status: 'success',
            emails
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const addEmail = async (req, res) => {
    try {
        const {email} = req.body

        if(!email )
        return res.status(400).json({err: 'Please add your email.'})

        const newEmail = new Email({
            email
        })

        await newEmail.save()

        res.json({
            msg: 'Thank you for subscribing!'
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}
