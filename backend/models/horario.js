const mongoose = require('mongoose');
const { Schema } = mongoose;

const HorarioSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Horario', HorarioSchema);