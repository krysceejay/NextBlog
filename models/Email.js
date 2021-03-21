import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EmailSchema = new Schema({
  email: {
    type: String,
    required: true
  },
},{
  timestamps: true
});


let Email = mongoose.models.email || mongoose.model('email', EmailSchema)

export default Email
