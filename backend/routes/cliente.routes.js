//ClienteRoute
const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.controller');

router.get('/', cliente.getClientes);
router.get('/search', cliente.getSearch);
router.post('/register', cliente.register);
router.post('/', cliente.createCLiente);
router.get('/:id', cliente.getCliente);
router.put('/:id', cliente.editCliente);
router.delete('/:id', cliente.deleteCliente);

module.exports = router;