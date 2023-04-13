var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


//GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights/post
router.post('/', flightsCtrl.create);
// GET /:id
router.get('/:id', flightsCtrl.show)
// POST /posts
router.post('/', flightsCtrl.create)

module.exports = router;
