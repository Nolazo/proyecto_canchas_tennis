const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoClienteSchema = new Schema({
    tipo: { type: String, required: true },
    valor: { type: Number, required: true },


});

module.exports = mongoose.model('TipoCliente', TipoClienteSchema);