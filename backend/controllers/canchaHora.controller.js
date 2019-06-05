const canchaHoraController = {};
const CanchaHora = require('../models/canchaHora');

canchaHoraController.getcanchaHoras = async(req, res) => {
    const canchaHora = await CanchaHora.find()
        .populate('cancha')
        .populate('hora')
    res.json(canchaHora);
};

canchaHoraController.createcanchaHora = async(req, res) => {
    const canchaHora = new CanchaHora(req.body);
    await CanchaHora.save();
    res.json(canchaHora);
};

canchaHoraController.getcanchaHora = async(req, res) => {
    const canchaHora = await CanchaHora.findById(req.params.id)
    res.json(canchaHora);
};

canchaHoraController.editcanchaHora = async(req, res) => {
    const { id } = req.params;
    const canchaHora = {
        cancha: req.body.canchaId,
        hora: req.body.horaId
    };
    await CanchaHora.findByIdAndUpdate(id, { $set: canchaHora }, { new: true });
    res.json({ status: 'Cliente Actualizado' });
};

canchaHoraController.deletecanchaHora = async(req, res) => {
    await CanchaHora.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cliente Borrado' });
};

module.exports = canchaHoraController;