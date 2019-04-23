const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoReservaSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Reserva', EstadoReservaSchema);