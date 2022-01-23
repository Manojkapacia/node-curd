const controller = require('../../../controller/users');
const express = require('express')
const router = express.Router()

router.get('/list', controller.getData);

module.exports = router