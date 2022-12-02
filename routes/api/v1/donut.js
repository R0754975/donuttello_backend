var express = require('express');
var router = express.Router();
var donutController = require('../../../controllers/api/v1/donut');

router.get('/', donutController.getAll);
router.get('/:id/:donut', donutController.getOne);
router.post('/', donutController.create);
router.delete('/:id', donutController.deleteDonut);
router.put('/:id/:donut', donutController.updateDonut);

module.exports = router;
