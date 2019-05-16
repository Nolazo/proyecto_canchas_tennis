const mongoose = require('mongoose');
const { Schema } = mongoose;

const PerfilSchema = new Schema({
    detalle: { type: String }
});

module.exports = mongoose.model('Perfil', PerfilSchema);