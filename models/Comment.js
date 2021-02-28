import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  },
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
  ],
  replies: [
    {
        type: Schema.Types.ObjectId,
        ref: 'reply'
    }
  ],
},{
  timestamps: true
});


let Comment = mongoose.models.comment || mongoose.model('comment', CommentSchema)

export default Comment
