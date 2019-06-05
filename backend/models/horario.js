const mongoose = require('mongoose');
const { Schema } = mongoose;

const HorarioSchema = new Schema({
    detalle: { type: String },
});

module.exports = mongoose.model('Horario', HorarioSchema);