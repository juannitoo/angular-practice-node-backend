const express = require('express')
const router = express.Router()
const authenticationCtrl = require('../controllers/authentication')

router.post('/signup', authenticationCtrl.signup)
router.post('/login', authenticationCtrl.login)
router.post('/isemailused', authenticationCtrl.isEmailUsed)

module.exports = router