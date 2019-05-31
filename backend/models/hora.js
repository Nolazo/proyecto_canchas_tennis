const mongoose = require('mongoose');
const { Schema } = mongoose;

const HoraSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    inicio: { type: Number },
    fin: { type: Number },
    estado: { type: String }
});

module.exports = mongoose.model('Hora', HoraSchema);