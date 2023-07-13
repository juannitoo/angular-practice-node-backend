const User = require('./models/user')
const express = require('express')
const userRoutes = require('./routes/users')

const app = express()
const cors = require("cors")
const router = express.Router()

app.use(express.json())

const connectionBdd = require('./db-connection/db-connection')

const corsOptions = {
    origin: ["http://localhost:4200","http://angular-practice-s3bucket.s3-website.eu-west-3.amazonaws.com/"],
    optionsSuccessStatus: 200 // For legacy browser support
    }

app.use(cors(corsOptions))

// affiche la date sur le point d'entrée pour verif qu'il fonctionne sans requeter
app.get('/', (req, res, next) => {
    res.status(201).json({ date: new Date() })
    next()
 })

app.use('/api/users', userRoutes)

// app.use('/api/auth', userRoutes)


module.exports = app