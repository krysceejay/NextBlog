import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ReplySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  replies: [
    {
        type: Schema.Types.ObjectId,
        ref: 'reply'
    }
  ],
  body: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    required: true,
    default: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ]
},{
  timestamps: true
})


let Reply = mongoose.models.reply || mongoose.model('reply', ReplySchema)

export default Reply
