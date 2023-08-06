const express = require('express')
require('dotenv').config() // chargement ici pour utilisation partout
const User = require('./models/user')
const userRoutes = require('./routes/users')
const authenticationRoutes = require('./routes/authentication')

const app = express()
const cors = require("cors")
const router = express.Router()

app.use(express.json())

const connectionBdd = require('./db-connection/db-connection')

const corsOptions = {
  origin: ["http://localhost:4200","http://angular-practice-s3bucket.s3-website.eu-west-3.amazonaws.com"],
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'Content'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
}

app.use(cors(corsOptions))

// test image ecs service aws pour vérifier le déploiement de la bonne image lors d'une maj
app.get('/', (req, res, next) => {
  res.status(200).json({ tentative: "5" })
  next()
})

app.use('/api/users', userRoutes)
app.use('/api/auth', authenticationRoutes)


module.exports = app