const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoClienteSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Cliente', EstadoClienteSchema);