const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/EaglesGame'

mongoose.connect(uri, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Player = require('./models/player');
const Question = require('./models/question');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/players', async (req, res) => {
  let player1 = await players.findOne({ name: req.body.player1 })
  let player2 = await Player.findOne({ name: req.body.player2 })
  return res.send({
    player1: player1, player2: player2
  })
})


app.get('/gameJson', async (req, res) => {
  const games = await Question.find()
  let gamesToSend = [
    { collectionTitle: 'Все о животных', questions: [] },
    { collectionTitle: 'История', questions: [] },
    { collectionTitle: 'Столицы', questions: [] },
    { collectionTitle: 'Жидкость', questions: [] },
    { collectionTitle: 'MARVEL', questions: [] },
    { collectionTitle: 'Горячая Вода', questions: [] }]
  gamesToSend.forEach(acc => {
    games.forEach((el) => {
      if (el.collectionTitle === acc.collectionTitle) {
        acc.questions.push(el)
      }
    })
  })
  res.send(gamesToSend)
})


app.post('/auth', async (req, res) => {
  let player1 = await Player.findOne({ name: req.body.player1 })
  let player2 = await Player.findOne({ name: req.body.player2 })
  if (!player1) {
    player1 = await Player.create({ name: req.body.player1 })
  }
  if (!player2) {
    player2 = await Player.create({ name: req.body.player2 })
  }
  res.send({
    player1: player1.name,
    rating1: player1.rating,
    player2: player2.name,
    rating2: player2.rating,
    isPlayer1Active: true
  })
})

app.post('/finish', async (req, res) => {
  if (req.body.player1 && req.body.player2) {
    await Player.updateOne({ name: req.body.player1 }, {
      $inc: { rating: req.body.rating1 }, $push: {
        rounds: {
          enemy: req.body.player2,
          myRating: req.body.rating1,
          enemyRating: req.body.rating2,
        }
      }
    })
    await Player.updateOne({ name: req.body.player2 }, {
      $inc: { rating: req.body.rating2 }, $push: {
        rounds: {
          enemy: req.body.player1,
          myRating: req.body.rating2,
          enemyRating: req.body.rating1,
        }
      }
    })
  }
  res.end()
})

app.listen(4000)
