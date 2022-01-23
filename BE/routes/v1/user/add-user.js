const controller = require('../../../controller/users');
const express = require('express')
const router = express.Router()

router.post('/save', controller.addData);

module.exports = router