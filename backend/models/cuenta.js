const mongoose = require('mongoose');
const { Schema } = mongoose;

const CuentaSchema = new Schema({
    usuario: { type: String, required: true },
    contraseña: { type: String, required: true },

});

module.exports = mongoose.model('Cuenta', CuentaSchema);