const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req, res) {
    const flights = await Flight.find({}).sort('flightNo')
    res.render('tickets/new', { title: 'Add New Ticket', flights})
}

async function create(req, res) {
    //const flight = await Flight.find({}).sort('flightNo')
    const curFlight = await Flight.findbyId(req.params.id)
try {
    const ticket = await Ticket.create(re.body)
    ticket.flight.push(curFlight)
    await ticket.save()
    res.redirect(`/flights/${curFlight._id}`)
} catch (err) {
    console.log(err)
    res.render('flights/', { errorMsg: err.message })
}
}