const reservaController = {};
const Reserva = require('../models/reserva');

reservaController.getReservas = async(req, res) => {
    const reservas = await Reserva.find()
        .populate('clienteId')
        .populate('horaId')
        .populate('valorId')
    res.json(reservas);
};

reservaController.createReserva = async(req, res) => {
    const reserva = new Reserva(req.body);
    await reserva.save();
    res.json({
        status: 'Reserva guardada'
    });
};

reservaController.getReserva = async(req, res) => {
    const reserva = await Reserva.findById(req.params.id)
        .populate('clienteId')
        .populate('horaId')
        .populate('valorId')
    res.json(reserva);
};

reservaController.editReserva = async(req, res) => {
    const { id } = req.params;
    const reserva = {
        estadoReserva: req.body.estadoReserva
    };
    await Reserva.findByIdAndUpdate(id, { $set: reserva }, { new: true });
    res.json({ status: 'Reserva Actualizada' });
};

reservaController.deleteReserva = async(req, res) => {
    await Reserva.findByIdAndRemove(req.params.id);
    res.json({ status: 'Reserva Borrada' });
};

module.exports = reservaController;