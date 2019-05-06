const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const TipoCanchaSchema = new Schema({
    tipo: { type: String }
});

module.exports = mongoose.model('TipoCancha', TipoCanchaSchema);