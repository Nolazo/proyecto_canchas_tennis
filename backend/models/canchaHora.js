const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const CanchaHoraSchema = new Schema({
    cancha: { type: mongoose.Schema.Types.ObjectId, ref: 'Cancha' },
    hora: { type: mongoose.Schema.Types.ObjectId, ref: 'Hora' }
});

module.exports = mongoose.model('CanchaHora', CanchaHoraSchema);