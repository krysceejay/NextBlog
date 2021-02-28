import mongoose from 'mongoose';
import CommentSchema from './Comment';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: [
    {
      type: String
    }
  ],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment'
    }
  ],
  postImg: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    required: true,
    default: false
  }
},{
  timestamps: true
});


let Post = mongoose.models.post|| mongoose.model('post', PostSchema)

export default Post
