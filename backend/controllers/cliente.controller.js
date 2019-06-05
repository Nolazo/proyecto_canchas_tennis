const clienteController = {};
const Cliente = require('../models/cliente');
const passport = require('passport');
const _ = require('lodash');

clienteController.getClientes = async(req, res) => {
    const clientes = await Cliente.find()
        .populate('tipoCliente')
    res.json(clientes);
};

clienteController.getSearch = async(req, res) => {
    const clientes = await Cliente.aggregate([
        //stage 1
        { $match: { nombre: "Jose" } }
    ]);
    res.json(clientes);
};

clienteController.createCLiente = async(req, res) => {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
};

clienteController.getCliente = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
};

clienteController.editCliente = async(req, res) => {
    const { id } = req.params;
    const cliente = {
        rut: req.body.rut,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        nacimiento: req.body.nacimiento,
        tipoCliente: req.body.tipoCliente
    };
    await Cliente.findByIdAndUpdate(id, { $set: cliente }, { new: true });
    res.json({ status: 'Cliente Actualizado' });
};

clienteController.deleteCliente = async(req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cliente Borrado' });
};

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

//LOGICA DE LA ACC
clienteController.register = async(req, res, next) => {
    const cliente = new Cliente();
    cliente.username = req.body.username;
    cliente.password = req.body.password;
    cliente.correo = req.body.correo;
    cliente.tipoCliente = req.body.tipoCliente;
    await cliente.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Email Duplicado']);
            else
                return next(err);
        }
    })

};

clienteController.authenticate = (req, res, next) => {
    //llama la utenticacion de passport
    passport.authenticate('local', (err, cliente, info) => {
        //errores desde el passport middleware
        if (err)
            return res.status(400).json(err);
        //usuario registrado
        else if (cliente)
            return res.status(200).json({ "token": cliente.generateJwt() });
        //usuario no registrado o contraseña incorrecta
        else
            return res.status(404).json(info);
    })(req, res);
}

clienteController.userProfile = (req, res, next) => {
    Cliente.findOne({ _id: req._id },
        (err, cliente) => {
            if (!cliente)
                return res.status(404).json({ status: false, message: 'Usuario no encontrado' });
            else
                return res.status(200).json({ status: true, cliente: _.pick(cliente, ['username', 'correo', 'tipoCliente']) });
        });
}

//QUERYS
clienteController.test = async(req, res) => {
    const cliente = await Cliente.find({ username: null })
    res.json(cliente);
}

module.exports = clienteController;