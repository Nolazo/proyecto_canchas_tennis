const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstadoCuentaSchema = new Schema({
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Estado Cuenta', EstadoCuentaSchema);