const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoCanchaSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Tipo Cancha', TipoCanchaSchema);