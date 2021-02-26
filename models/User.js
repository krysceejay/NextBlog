import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
   platform : {
    type: String
    },
  accountId : {
    type: String
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  emailVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

let User = mongoose.models.user || mongoose.model('user', userSchema)

export default User
