const express = require('express')
const { app } = require('../../controller/pingController')

const router = express.Router();

router.get('/ping', app)

module.exports = router;