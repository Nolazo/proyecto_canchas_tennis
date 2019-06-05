//reservaRoute
const express = require('express');
const router = express.Router();
const reserva = require('../controllers/reserva.controller');

router.get('/', reserva.getReservas);
router.post('/', reserva.createReserva);
router.get('/:id', reserva.getReserva);
router.put('/:id', reserva.editReserva);
router.delete('/:id', reserva.deleteReserva);

module.exports = router;