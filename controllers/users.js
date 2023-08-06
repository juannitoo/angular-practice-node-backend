const User = require('../models/user')

exports.getUsers = (req, res, next) => {
  User.find().then((users) => {
    res.status(200).json(users)
  })
  .catch((error => {
    res.status(401).json({error})
  }))
}

exports.getUser = (req, res, next) => {
  User.findOne({ _id: req.params.id })
  .then( (users) => { res.status(200).json(users) })
  .catch( (error) => { res.status(401).json({error}) })
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

// L'id change lors de l'update donc il faut le re-récupérer, à cause de "new" User()
exports.updateUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }))
}

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
  .catch(error => res.status(400).json({ error }))
}


