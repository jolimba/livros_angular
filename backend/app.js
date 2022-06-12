const express = require('express')
const app = express();
const Client = require('./models/client')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const books = []

mongoose.connect('mongodb+srv://joao:1234@cluster0.4bjnk.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('conexão Ok')
  }).catch(() => {
    console.log('conexão Nok')
  })
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
})

app.post('/api/books', (req, res, next) => {
  const client = new Client({
    titulo: req.body.titulo,
    id: req.body.id,
    autor: req.body.autor,
    pags: req.body.pags
  })
  client.save()
  console.log(client)
  res.status(201).json({mensagem: "Inserted book"})
  next()
})

app.use('/api/books', (req, res, next) => {
  Client.find().then(documents => {
    console.log(documents)
    res.status(200).json({
      mensagem: "tudo certin",
      books: books
    })
  })
})

module.exports = app
