const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ClienteSchema = new Schema({
    rut: { type: String },
    nSocio: { type: Number },
    nombre: { type: String },
    estadoReserva: { type: String },
    empresa: { type: String },
    apellido: { type: String },
    telefono: { type: Number },
    correo: { type: String },

});

module.exports = mongoose.model('Cliente', ClienteSchema);