const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoCanchaSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Cancha', EstadoCanchaSchema);