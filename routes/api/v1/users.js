var express = require('express');
var router = express.Router();
const authController = require('../../../controllers/api/v1/auth');

/* GET users listing. */
router.post('/signup', authController.signup);

module.exports = router;
