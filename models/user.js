const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  company: { type: String, required: true },
  website: { type: String, required: true },
})

module.exports = mongoose.model('User', userSchema)
