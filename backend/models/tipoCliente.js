const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoClienteSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Tipo Cliente', TipoClienteSchema);