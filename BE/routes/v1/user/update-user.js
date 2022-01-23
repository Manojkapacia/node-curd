const controller = require('../../../controller/users');
const express = require('express')
const router = express.Router()

router.put('/update', controller.updateData);

module.exports = router