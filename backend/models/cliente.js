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
    tipoCliente: { type: String },
    visitas: { type: Number },
    //logica de la acc
    username: { type: String },
    password: { type: String },
    password2: { type: String },
    bloqueado: { type: Boolean }
});

module.exports = mongoose.model('Cliente', ClienteSchema);