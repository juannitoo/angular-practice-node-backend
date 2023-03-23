const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users')

router.get('/', userCtrl.getUsers)
router.post('/', userCtrl.postUser)

module.exports = router;