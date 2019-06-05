//valorRoute
const express = require('express');
const router = express.Router();
const valor = require('../controllers/valor.controller');

router.get('/', valor.getValors);
router.post('/', valor.createValor);
router.get('/:id', valor.getValor);
router.put('/:id', valor.editValor);
router.delete('/:id', valor.deleteValor);

module.exports = router;