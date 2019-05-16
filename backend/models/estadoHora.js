const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoHoraSchema = new Schema({

    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Hora', EstadoHoraSchema);