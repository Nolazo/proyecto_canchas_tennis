//ClienteRoute
const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.controller');
const jwtHelper = require('../jwtHelper');


router.get('/', cliente.getClientes);
router.get('/test', cliente.test);
router.get('/search', cliente.getSearch);
router.post('/register', cliente.register);
router.post('/', cliente.createCLiente);
router.get('/:id', cliente.getCliente);
router.put('/:id', cliente.editCliente);
router.delete('/:id', cliente.deleteCliente);
//logica login
router.post('/authenticate', cliente.authenticate);
router.get('/p/profile', jwtHelper.verifyJwtToken, cliente.userProfile);

module.exports = router;