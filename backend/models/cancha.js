const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const CanchaSchema = new Schema({
    numero: { type: Number },
    estado: { type: String },
    tipoCancha: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCancha' }
});

module.exports = mongoose.model('Cancha', CanchaSchema);