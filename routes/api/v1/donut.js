var express = require('express');
var router = express.Router();
var passport = require('../../../passport/passport');
var donutController = require('../../../controllers/api/v1/donut');

router.get('/', passport.authenticate('jwt', {session: false}), donutController.getAll);
router.get('/:id/:donut', donutController.getOne);
router.get('/:id', donutController.getOrder);
router.post('/', donutController.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), donutController.deleteOrder);
router.delete('/:id/:donut', passport.authenticate('jwt', {session: false}), donutController.deleteDonut);
router.put('/:id/:donut',  passport.authenticate('jwt', {session: false}), donutController.updateDonut);
router.put('/:id',  passport.authenticate('jwt', {session: false}), donutController.updateOrder);
router.post('/auth', passport.authenticate('jwt', {session: false}), donutController.auth);

module.exports = router;
