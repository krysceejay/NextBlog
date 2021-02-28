import bcrypt from 'bcryptjs'
import connectDB from '../../../utils/db'
import User from '../../../models/User'
import valid from '../../../utils/valid'

//Connect Database
connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    
        default:
            break;
    }
  }

const register = async (req, res) => {
 try {
     const {name, email, password} = req.body
     const errMsg = valid(name, email, password)
     if(errMsg) return res.status(400).json({err: errMsg})

     const user = await User.findOne({ email })
     if(user) return res.status(400).json({err: 'This email already exists.'})

     const salt = await bcrypt.genSalt(10)
     const hashPassword = await bcrypt.hash(password, salt)

     const newUser = new User({ 
        fullName: name, 
        email, 
        password: hashPassword 
    })

    await newUser.save()
    res.json({msg: "Register Success!"})
       
   } catch (err) {
    return res.status(500).json({err: err.message})
   }
}  