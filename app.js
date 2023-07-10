const User = require('./models/user')
const express = require('express')
const userRoutes = require('./routes/users')

const app = express()
const cors = require("cors")
const router = express.Router()

app.use(express.json()) // => permet req.body

const connectionBdd = require('./db-connection/db-connection')

const corsOptions = {
    origin: ["http://localhost:4200","http://angular-practice-s3bucket.s3-website.eu-west-3.amazonaws.com/"],
    optionsSuccessStatus: 200 // For legacy browser support
    }

app.use(cors(corsOptions))

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', "*" )
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Content-Length, Accept, Content-Type, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//     next()
// })

app.get('/', (req, res, next) => {
    res.status(201).json({ date: new Date() })
    next()
 })

app.post('/',(req, res, next) => {
    console.log(req.body)
    res.status(201).json({ message: 'Objet créé' })
    next()
})


app.use('/api/users', userRoutes)

// app.use('/api/auth', userRoutes)


module.exports = app