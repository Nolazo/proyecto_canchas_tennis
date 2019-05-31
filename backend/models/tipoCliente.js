const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const TipoCliente = new Schema({
    tipo: { type: String }
});