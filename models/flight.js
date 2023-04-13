const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN']
    },
    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United', 'Delta']
    },
    airport: {
        type: String, 
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number, min: 10, max:9999,
    },
    departs: {
        type: Date,
    },
    destinations: [destinationSchema]
})



module.exports = mongoose.model('Flight', flightSchema)