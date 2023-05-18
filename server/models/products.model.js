const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter Title'],
    minLength: [2, 'Title must be at least 2 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter Price'],
    min: [0.01, 'Price must be at least 0.01']
  },
  description: {
    type: String,
    required: [true, 'Please enter Description'],
    minLength: [5, 'Description must be at least 5 characters']
  }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);