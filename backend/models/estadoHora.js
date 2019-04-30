const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoHoraSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Hora', EstadoHoraSchema);