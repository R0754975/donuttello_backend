var express = require('express');
var router = express.Router();
var passport = require('../../../passport/passport');
var donutController = require('../../../controllers/api/v1/donut');

router.get('/', passport.authenticate('jwt', {session: false}), donutController.getAll);
router.get('/:id/:donut', passport.authenticate('jwt', {session: false}), donutController.getOne);
router.post('/', donutController.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), donutController.deleteOrder);
router.delete('/:id/:donut', passport.authenticate('jwt', {session: false}), donutController.deleteDonut);
router.put('/:id/:donut', donutController.updateDonut);

module.exports = router;
