const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://juannitoo:xxxxx@cluster-tuto-oc.ewqkpnr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'angular-practice' })
  .then(() => console.log('Connexion à MongoDB Atlas réussie, state : ', mongoose.connection.readyState))
  .catch(() => console.log('Connexion à MongoDB échouée !'))


module.exports = connection