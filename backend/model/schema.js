const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    reuired: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Blog', BlogSchema);
