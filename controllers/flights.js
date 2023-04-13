const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function show(req,res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {
        title: 'Flight Details',
        flight
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    let num = req.body.flightNo
    if(num < 10 || num >9999) return;
    const newFlight = new Flight(req.body);
    newFlight.save()
    res.redirect('flights')
}

async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { flights })
}