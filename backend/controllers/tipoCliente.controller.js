const tipoClienteController = {};
const TipoCliente = require('../models/tipoCliente');


tipoClienteController.getTipoClientes = async(req, res) => {
    const tipoClientes = await TipoCliente.find()
    res.json(tipoClientes);
};

tipoClienteController.createTipoCliente = async(req, res) => {
    const tipoCliente = new TipoCliente(req.body);
    await tipoCliente.save();
    res.json({
        status: 'TipoCliente guardada'
    });
};

tipoClienteController.getTipoCliente = async(req, res) => {
    const tipoCliente = await TipoCliente.findById(req.params.id)
    res.json(tipoCliente);
};

tipoClienteController.editTipoCliente = async(req, res) => {
    const { id } = req.params;
    const tipoCliente = {
        tipo: req.body.tipo
    };
    await TipoCliente.findByIdAndUpdate(id, { $set: tipoCliente }, { new: true });
    res.json({ status: 'TipoCliente Actualizada' });
};

tipoClienteController.deleteTipoCliente = async(req, res) => {
    await TipoCliente.findByIdAndRemove(req.params.id);
    res.json({ status: 'TipoCliente Borrada' });
};

module.exports = tipoClienteController;