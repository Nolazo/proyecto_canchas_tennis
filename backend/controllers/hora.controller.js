const horaController = {};
const Hora = require('../models/hora');

horaController.getHoras = async(req, res) => {
    const horas = await Hora.find()
    res.json(horas);
};

horaController.createHora = async(req, res) => {
    const hora = new Hora(req.body);
    await hora.save();
    res.json({
        status: 'Hora guardada'
    });
};

horaController.getHora = async(req, res) => {
    const hora = await Hora.findById(req.params.id)
    res.json(hora);
};

horaController.editHora = async(req, res) => {
    const { id } = req.params;
    const hora = {
        fecha: req.body.fecha,
        inicio: req.body.inicio,
        fin: req.body.fin,
        estado: req.body.estado
    };
    await Hora.findByIdAndUpdate(id, { $set: hora }, { new: true });
    res.json({ status: 'Hora Actualizada' });
};

horaController.deleteHora = async(req, res) => {
    await Hora.findByIdAndRemove(req.params.id);
    res.json({ status: 'Hora Borrada' });
};

module.exports = horaController;