const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ValorSchema = new Schema({
    valor: { type: Number },
    juego: { type: String },
    tipoCancha: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCancha' },
    horario: { type: mongoose.Schema.Types.ObjectId, ref: 'Horario' },
    tipoCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCliente' }
});

module.exports = mongoose.model('Valor', ValorSchema);