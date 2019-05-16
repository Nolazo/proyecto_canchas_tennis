const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const EmpresaSchema = new Schema({
    rut: { type: String },
    nombre: { type: String, required: true },
    telefono: { type: String },
    correo: { type: String },
    htotal: { type: Number },
    husadas: { type: Number }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);