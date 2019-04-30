const mongoose = require('mongoose');
const { Schema } = mongoose;

const TipoClienteSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo: { type: String, required: true },
    valor: { type: Number, required: true },
    horario: {},


});

module.exports = mongoose.model('Tipo Cliente', TipoClienteSchema);