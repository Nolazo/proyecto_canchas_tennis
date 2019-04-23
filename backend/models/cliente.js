const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: Number, required: true },
    correo: { type: String, required: true },

});

module.exports = mongoose.model('Cliente', ClienteSchema);