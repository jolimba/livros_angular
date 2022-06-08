const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const books = []

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
})

app.post('/api/books', (req, res, next) => {
  const book = req.body
  console.log(book)
  res.status(201).json({mensagem: "Inserted book"})
})

app.use('/api/books', (req, res, next) => {
  res.status(200).json({
    mensagem: "tudo certin",
    books: books
  })
})

module.exports = app
