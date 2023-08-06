const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    })
    user.save()
    .then(() => { 
      const token = jwt.sign(
        { userId: user._id },
        process.env.tokenSecret,  
        { expiresIn: '2h' }
      )
      res.status(201).json({ 
        status: 200,
        userId: user._id,
        token: token,
      })
    })
    .catch(error => res.status(400).json({ error }))
  })
  .catch(error => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(401).json({ message: 'Identifiants incorrects'})
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ message: 'Identifiants incorrects' })
      }
      res.status(200).json({
        userId: user._id,
        email: user.email,
        status: 200,
        token: jwt.sign(
          { userId: user._id },
          process.env.tokenSecret, 
          { expiresIn: '2h' }
        ),
        message : "identification réussie"
      })
    })
    .catch(error => { res.status(500).json({ error }); console.log("fail 500 1 then bcrypt") }) 
  })
  .catch(error => {res.status(500).json({ error }); console.log("fail 2 then général, pas de user") })
}

exports.isEmailUsed = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then( (user) => {
    return user !== null ? res.status(200).json({  resp : true }) : res.status(200).json({  resp : false })
  }).catch( (resp) => res.status(401).json({  resp : null }))
}