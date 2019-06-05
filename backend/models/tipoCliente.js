const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const TipoClienteSchema = new Schema({
    tipo: { type: String }
});

module.exports = mongoose.model('TipoCliente', TipoClienteSchema);