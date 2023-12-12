const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let launchesSchema = new Schema ({
    flight_number: {
        type: Number,
        required: true,
    },
    mission_name: {
        type: String,
        required: "Le contenu est requis"
    },
    mission_id: {
        type: Array,
        required: "Le contenu est requis"
    },
    // rocket_id: {
    //     type: String
    // },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Launches', launchesSchema);