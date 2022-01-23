const controller = require('../../../controller/users');
const express = require('express')
const router = express.Router()

router.delete('/delete/:id', controller.deleteUser);

module.exports = router