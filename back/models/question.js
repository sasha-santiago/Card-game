const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
  collectionTitle: String,
  question: String,
  answer: String,
  value: Number,
  answered: Boolean, default: false
})

module.exports = Question;
