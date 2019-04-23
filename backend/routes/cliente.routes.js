//ClienteRoute
const express = require('express');
const router = express.Router();
const cancha = require('../controllers/cliente.controller');

router.get('/', cliente.getClientes);
router.post('/', cliente.createCLiente);
router.get('/:id', cliente.getCliente);
router.put('/:id', cliente.editCliente);
router.delete('/:id', cliente.deleteCliente);

module.exports = router;