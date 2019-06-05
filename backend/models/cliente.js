const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cfg = require('../config');

const ClienteSchema = new Schema({
    rut: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    telefono: { type: String },
    correo: { type: String, unique: true },
    nacimiento: { type: Date },
    empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
    tipoCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCliente' },
    visitas: { type: Number },
    //logica de la acc
    username: { type: String },
    password: { type: String },
    bloqueado: { type: Boolean },
    saltSecret: String
});

//inUse
ClienteSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.genSalt = salt;
            next();
        });
    });
});
//Metodos
ClienteSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


ClienteSchema.methods.generateJwt = function() {
    return jwt.sign({ _id: this._id },
        cfg.JWT_SECRET, {
            expiresIn: cfg.JWT_EXP
        });
};

module.exports = mongoose.model('Cliente', ClienteSchema);