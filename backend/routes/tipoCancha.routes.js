//tipoCanchaRoute
const express = require('express');
const router = express.Router();
const tipoCancha = require('../controllers/tipoCancha.controller');

router.get('/', tipoCancha.getTipoCanchas);
router.post('/', tipoCancha.createTipoCancha);
//router.get('/:id', tipoCancha.getCliente);
//router.put('/:id', tipoCancha.editCliente);
//router.delete('/:id', tipoCancha.deleteCliente);

module.exports = router;