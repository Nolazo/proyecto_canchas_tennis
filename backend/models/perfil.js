const mongoose = require('mongoose');
const { Schema } = mongoose;

const PerfilSchema = new Schema({
    detalle: { type: String, required: true },
});

module.exports = mongoose.model('Perfil', PerfilSchema);