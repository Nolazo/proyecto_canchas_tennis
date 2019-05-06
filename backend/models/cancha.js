const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const CanchaSchema = new Schema({
    numero: { type: Number },
    tipoCancha: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCancha' },
    estado: { type: String },

});


module.exports = mongoose.model('Cancha', CanchaSchema);