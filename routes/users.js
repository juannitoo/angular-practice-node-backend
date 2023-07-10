const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')
const auth = require('../middlewares/auth')

router.get('/', userCtrl.getUsers)
router.post('/', userCtrl.postUser)
router.get('/:id', userCtrl.getUser)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router