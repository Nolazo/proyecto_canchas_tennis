const mongoose = require('mongoose');
const { Schema } = mongoose;

const HoraSchema = new Schema({
    fecha: { type: Date },
    inicio: { type: Date },
    fin: { type: Date },
    estado: { type: String }
});

module.exports = mongoose.model('Hora', HoraSchema);