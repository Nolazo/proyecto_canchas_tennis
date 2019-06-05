const express = require('express');
const router = express.Router();
const canchaHora = require('../controllers/canchaHora.controller');

router.get('/', canchaHora.getcanchaHoras);
router.post('/', canchaHora.createcanchaHora);
router.get('/:id', canchaHora.getcanchaHora);
router.put('/:id', canchaHora.editcanchaHora);
router.delete('/id', canchaHora.deletecanchaHora);

module.exports = router;