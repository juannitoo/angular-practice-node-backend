const User = require('./models/user')
const express = require('express')
const userRoutes = require('./routes/users')

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

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//     res.setHeader('Access-Control-Allow-Credentials', 'true')
//     next()
//   });

// test image ecs service aws pour vérifier le déploiement de la bonne image lors d'une maj
app.get('/', (req, res, next) => {
  res.status(200).json({ tentative: "4" })
  next()
})

app.use('/api/users', userRoutes)



module.exports = app