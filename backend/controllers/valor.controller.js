const valorController = {};
const Valor = require('../models/valor');

valorController.getValors = async(req, res) => {
    const valores = await Valor.find()
    res.json(valores);
};

valorController.createValor = async(req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.json({
        status: 'Valor guardado'
    });
};

valorController.getValor = async(req, res) => {
    const valor = await Valor.findById(req.params.id)
    res.json(valor);
};

valorController.editValor = async(req, res) => {
    const { id } = req.params;
    const valor = {
        valor: req.body.fecha,
        juego: req.body.inicio,
        tipoCancha: req.body.tipoCancha,
        horario: req.body.horario,
        tipoCliente: req.body.tipoCliente
    };
    await Valor.findByIdAndUpdate(id, { $set: valor }, { new: true });
    res.json({ status: 'Valor Actualizada' });
};

valorController.deleteValor = async(req, res) => {
    await Valor.findByIdAndRemove(req.params.id);
    res.json({ status: 'Valor Borrado' });
};

module.exports = valorController;