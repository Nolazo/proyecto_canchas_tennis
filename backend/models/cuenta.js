const mongoose = require('mongoose');
const { Schema } = mongoose;

const CuentaSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: { type: String, required: true },
    contraseña: { type: String, required: true },

});

module.exports = mongoose.model('Cuenta', CuentaSchema);