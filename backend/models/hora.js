const mongoose = require('mongoose');
const { Schema } = mongoose;

const HoraSchema = new Schema({
    horaInicio: { type: Date, required: true },
    horaFin: { type: Date, required: true },
    fecha: { type: Date, required: true },

});

module.exports = mongoose.model('Hora', CuentaHoraSchema);