//TipoClienteRoute
const express = require('express');
const router = express.Router();
const tipoCliente = require('../controllers/tipoCliente.controller');


router.get('/', tipoCliente.getTipoClientes);
router.post('/', tipoCliente.createTipoCliente);
router.get('/:id', tipoCliente.getTipoCliente);
router.put('/:id', tipoCliente.editTipoCliente);
router.delete('/:id', tipoCliente.deleteTipoCliente);

module.exports = router;