//HoraRoute
const express = require('express');
const router = express.Router();
const hora = require('../controllers/hora.controller');

router.get('/', hora.getHoras);
router.post('/', hora.createHora);
router.get('/:id', hora.getHora);
router.put('/:id', hora.editHora);
router.delete('/:id', hora.deleteHora);

module.exports = router;