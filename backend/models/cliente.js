const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ClienteSchema = new Schema({
    rut: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    telefono: { type: String },
    correo: { type: String },
    nacimiento: { type: Date },
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
    cuenta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuenta' },
    tipoCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCliente' },
    visitas: { type: Number }
});

module.exports = mongoose.model('Cliente', ClienteSchema);