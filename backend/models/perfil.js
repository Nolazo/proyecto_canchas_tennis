const mongoose = require('mongoose');
const { Schema } = mongoose;

const PerfilSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    detalle: { type: String, required: true },

});

module.exports = mongoose.model('Perfil', PerfilSchema);