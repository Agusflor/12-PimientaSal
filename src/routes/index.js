var express = require('express');
var router = express.Router();

const {index} = require('../controllers/mainController')

router.get('/', index);

module.exports = router;

