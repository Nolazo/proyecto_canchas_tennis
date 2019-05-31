const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ReservaSchema = new Schema({
    estadoReserva: { type: String },
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    horaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hora' },
    valorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Valor' }
});

module.exports = mongoose.model('Reserva', ReservaSchema);