const tipoCanchaController = {};
const TipoCancha = require('../models/tipoCancha');

tipoCanchaController.getTipoCanchas = async(req, res) => {
    const tipoCanchas = await TipoCancha.find();
    res.json(tipoCanchas);
};

tipoCanchaController.createTipoCancha = async(req, res) => {
    const tipoCancha = new TipoCancha(req.body);
    await tipoCancha.save();
    res.json({
        status: 'Tipo cancha creada'
    });
};

module.exports = tipoCanchaController;