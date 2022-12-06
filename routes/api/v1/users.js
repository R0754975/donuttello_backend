var express = require('express');
var router = express.Router();
const authController = require('../../../controllers/api/v1/auth');

/* GET users listing. */
router.get('/signup', authController.testMessage);

module.exports = router;
