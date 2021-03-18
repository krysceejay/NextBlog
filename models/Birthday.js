import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BirthdaySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
},{
  timestamps: true
});


let Birthday = mongoose.models.birthday || mongoose.model('birthday', BirthdaySchema)

export default Birthday
