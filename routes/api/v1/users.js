var express = require('express');
var router = express.Router();
var passport = require('../../../passport/passport');
const authController = require('../../../controllers/api/v1/auth');

/* GET users listing. */
router.post('/signup', authController.signup); 
router.post('/login', authController.login);
router.post('/auth', passport.authenticate('jwt', {session: false}), authController.auth);

module.exports = router;
