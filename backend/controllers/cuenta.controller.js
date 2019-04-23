const cuentaController = {};
const Cuenta = require('../models/cuenta');

cuentaController.getCuenta = async(req, res) => {
    const cuentas = await Cuenta.find();
    res.json(cuentas);
};

cuentaController.createCuenta = async(req, res) => {
    const cuenta = new Cuenta(req.body);
    await cuenta.save();
    res.json({
        status: 'Cuenta guardada'
    });
};

cuentaController.getCuenta = async(req, res) => {
    const cuenta = await Cuenta.findById(req.params.id);
    res.json(cuenta);
};

cuentaController.editCuenta = async(req, res) => {
    const { id } = req.params;
    const cuenta = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    };
    await Cuenta.findByIdAndUpdate(id, { $set: cuenta }, { new: true });
    res.json({ status: 'Cuenta Actualizada' });
};

cuentaController.deleteCuenta = async(req, res) => {
    await Cuenta.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cuenta Borrada' });
};

module.exports = cuentaController;