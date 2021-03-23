const mongoose = require('mongoose');

const Player = mongoose.model('Player', {
  name: String,
  rating: { type: Number, default: 0 },
  rounds: { type: Array, default: [] }
})

module.exports = Player;
