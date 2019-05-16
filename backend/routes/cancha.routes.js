//canchaRoute
const express = require('express');
const router = express.Router();
const cancha = require('../controllers/cancha.controller');

router.get('/', cancha.getCanchas);
//router.get('/tipo', cancha.getTipo);
router.post('/', cancha.createCancha);
router.get('/:id', cancha.getCancha);
router.put('/:id', cancha.editCancha);
router.delete('/:id', cancha.deleteCancha);

module.exports = router;