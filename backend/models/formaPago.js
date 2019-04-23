const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormaPagoSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Reserva', FormaPagoSchema);