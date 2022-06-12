const mongoose = require('mongoose')

const clientShema = mongoose.Schema({
  titulo: {type: String, require: true},
  id: {type: String, require: true},
  autor: {type: String, require: true},
  pags: {type: String, require: true}
})

module.exports = mongoose.model('Client', clientShema)
