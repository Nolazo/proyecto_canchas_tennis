const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const ReservaSchema = new Schema({


});

module.exports = mongoose.model('Reserva', ReservaSchema);