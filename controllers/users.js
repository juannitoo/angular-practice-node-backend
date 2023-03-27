const User = require('../models/user')

exports.getUsers = (req, res, next) => {
  User.find().then((users) => {
      res.status(200).json(users)
  })
  .catch((error => {
    res.status(401).json({error})
  }))
}

exports.postUser = (req, res, next) => {
  delete req.body._id
  const user = new User({
      ...req.body
  })
  user.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }))
}

