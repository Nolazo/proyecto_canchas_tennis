const mongoose = require('mongoose');
const { Schema } = mongoose;

const CanchaSchema = new Schema({

    numero: { type: Number, required: true },
    tipo: { type: String, required: true },
    date: { type: Date, default: Date.now },
    pago: { type: Schema.Types.ObjectId, ref: 'Pago' }

});

module.exports = mongoose.model('Cancha', CanchaSchema);