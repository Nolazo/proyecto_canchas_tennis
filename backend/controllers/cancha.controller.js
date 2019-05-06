const canchaController = {};
const Cancha = require('../models/cancha');

canchaController.getCanchas = async(req, res) => {
    const canchas = await Cancha.find()
        .populate('tipoCancha');
    res.json(canchas);
};

canchaController.createCancha = async(req, res) => {
    const cancha = new Cancha(req.body);
    await cancha.save();
    res.json({
        status: 'Cancha guardada SAPBEEEE'
    });
};

canchaController.getCancha = async(req, res) => {
    const cancha = await Cancha.findById(req.params.id);
    res.json(cancha);
};

canchaController.editCancha = async(req, res) => {
    const { id } = req.params;
    const cancha = {
        numero: req.body.numero,
        estado: req.body.estado
    };
    await Cancha.findByIdAndUpdate(id, { $set: cancha }, { new: true });
    res.json({ status: 'Cancha Actualizada' });
};

canchaController.deleteCancha = async(req, res) => {
    await Cancha.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cancha Borrada' });
};

module.exports = canchaController;