const express = require('express')
const User = require('./models/user')
const userRoutes = require('./routes/users')

const app = express()
const router = express.Router();
app.use(express.json())

const connectionBdd = require('./db-connection/db-connection')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use('/users', userRoutes);


module.exports = app