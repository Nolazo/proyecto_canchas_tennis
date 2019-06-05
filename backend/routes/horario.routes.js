//Horario
const express = require('express');
const router = express.Router();
const horario = require('../controllers/horario.controller');

router.get('/', horario.getHorarios);
router.post('/', horario.createHorario);
router.get('/:id', horario.getHorario);
router.put('/:id', horario.editHorario);
router.delete('/:id', horario.deleteHorario);

module.exports = router;