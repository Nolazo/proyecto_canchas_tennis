const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema({
    horario: { type: String, required: true }

});

module.exports = mongoose.model('Pago', PagoSchema);