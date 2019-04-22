const mongoose = require('mongoose');
const { Schema } = mongoose;

const CanchaSchema = new Schema({
    numero: { type: Number, required: true },
    date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Cancha', CanchaSchema);