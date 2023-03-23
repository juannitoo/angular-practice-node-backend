const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.js')

const app = express()

mongoose.connect('mongodb+srv://juannitoo:xxxx@cluster-tuto-oc.ewqkpnr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'angular-practice' })
  .then(() => console.log('Connexion à MongoDB Atlas réussie, state : ', mongoose.connection.readyState))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

// state connection mongo
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

app.get('/users', (req, res, next) => {
    const users = [
      {
        _id: "oeihfzeoi",
        name: "xaxa",
        username: "xaxa",
        email: "jeanbalangue@hotmail.fr",
        phone: "1111111111",
        address: "1111111111",
        company: "1111111111",
        website: "1111111111",
        userId: "xaxa",
      }
    ]
    res.status(200).json(users)
  })

  app.post('/users', (req, res, next) => {
    delete req.body._id
    const user = new User({
      ...req.body
    })
    user.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }))
  })

module.exports = app