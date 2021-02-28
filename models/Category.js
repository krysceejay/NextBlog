import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
},{
    timestamps: true
  });

let Category = mongoose.models.category || mongoose.model('category', CategorySchema)

export default Category