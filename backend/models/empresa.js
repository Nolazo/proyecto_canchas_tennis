const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const EmpresaSchema = new Schema({
    nombre: { type: String, required: true },
    rut: { type: String },
    horaBolsa: {},
    horaBolsaDRestante: {},

});

module.exports = mongoose.model('Empresa', EmpresaSchema);