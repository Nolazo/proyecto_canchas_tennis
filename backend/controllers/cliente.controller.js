const clienteController = {};
const Cliente = require('../models/cliente');

clienteController.getClientes = async(req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

clienteController.createCLiente = async(req, res) => {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json({
        status: 'Cliente Guardado'
    });
};

clienteController.getCliente = async(req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json(cliente);
};

clienteController.editCliente = async(req, res) => {
    const { id } = req.params;
    const cliente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo
    };
    await Cliente.findByIdAndUpdate(id, { $set: cliente }, { new: true });
    res.json({ status: 'Cliente Actualizado' });
};

clienteController.deleteCliente = async(req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cliente Borrado' });
};

module.exports = clienteController;