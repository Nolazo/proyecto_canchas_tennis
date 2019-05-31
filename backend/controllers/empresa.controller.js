const empresaController = {};
const Empresa = require('../models/empresa');


empresaController.getEmpresas = async(req, res) => {
    const empresas = await Empresa.find()
    res.json(empresas);
};

empresaController.createEmpresa = async(req, res) => {
    const empresa = new Empresa(req.body);
    await empresa.save();
    res.json({
        status: 'Empresa Creada'
    });
};

empresaController.getEmpresa = async(req, res) => {
    const empresa = await Empresa.findById(req.params.id)
    res.json(empresa);
};

empresaController.editEmpresa = async(req, res) => {
    const { id } = req.params;
    const empresa = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        htotal: req.body.htotal,
        husadas: req.body.husadas
    };
    await Empresa.findByIdAndUpdate(id, { $set: empresa }, { new: true });
    res.json({ status: 'Empresa Actualizada' });
};

empresaController.deleteEmpresa = async(req, res) => {
    await Empresa.findByIdAndRemove(req.params.id);
    res.json({ status: 'Empresa Borrada' });
};

module.exports = empresaController;