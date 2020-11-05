const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    calc: {
        type: String,
        required: true
    }
});

const Calculation = mongoose.model('Calculation', calculationSchema);

module.exports = Calculation;
