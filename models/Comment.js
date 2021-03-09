import mongoose from 'mongoose'
const Schema = mongoose.Schema

// const reviewSchema = mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

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
  body: { type: String, required: true },
  show: { type: Boolean, required: true, default: true },
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
  replies: [ReplySchema]
},{
  timestamps: true
});


let Comment = mongoose.models.comment || mongoose.model('comment', CommentSchema)

export default Comment
