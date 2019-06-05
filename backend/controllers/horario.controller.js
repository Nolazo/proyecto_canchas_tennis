const horarioController = {};
const Horario = require('../models/horario');

horarioController.getHorarios = async(req, res) => {
    const horarios = await Horario.find()
    res.json(horarios);
};

horarioController.createHorario = async(req, res) => {
    const horario = new Horario(req.body);
    await horario.save();
    res.json(horario);
};

horarioController.getHorario = async(req, res) => {
    const horario = await Horario.findById(req.params.id)
    res.json(horario);
};

horarioController.editHorario = async(req, res) => {
    const { id } = req.params;
    const horario = {
        cancha: req.body.canchaId,
        hora: req.body.horaId
    };
    await Horario.findByIdAndUpdate(id, { $set: horario }, { new: true });
    res.json({ status: 'Cliente Actualizado' });
};

horarioController.deleteHorario = async(req, res) => {
    await Horario.findByIdAndRemove(req.params.id);
    res.json({ status: 'Cliente Borrado' });
};

module.exports = horarioController;