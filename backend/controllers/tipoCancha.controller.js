const tipoController = {};
const Tipo = require('../models/tipoCancha');

tipoController.getTipoCanchas = async(req, res) => {
    const tipos = await Tipo.find()
    res.json(tipos);
};

tipoController.createTipoCancha = async(req, res) => {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.json({
        status: 'Tipo guardada SAPBEEEE'
    });
};

tipoController.getTipoCancha = async(req, res) => {
    const tipo = await Tipo.findById(req.params.id);
    res.json(tipo);
};

module.exports = tipoController;