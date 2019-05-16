//tipoCanchaRoute
const express = require('express');
const router = express.Router();
const tipoCancha = require('../controllers/tipoCancha.controller');

router.get('/', tipoCancha.getTipoCanchas);
router.post('/', tipoCancha.createTipoCancha);
//router.get('/:id', tipoCancha.getTipoCancha);
//router.put('/:id', tipoCancha.editTipoCancha);
//router.delete('/:id', tipoCancha.deleteTipoCancha);

module.exports = router;