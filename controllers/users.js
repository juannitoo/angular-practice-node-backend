const User = require('../models/user')

exports.getUsers = (req, res, next) => {
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

// {
//   "_id": "oeihfzeoi",
//   "name": "xaxa",
//   "username": "xaxa",
//   "email": "jeanbalangue@hotmail.fr",
//   "phone": "1111111111",
//   "address": "1111111111",
//   "company": "1111111111",
//   "website": "1111111111",
//   "userId": "xaxa"
// }
