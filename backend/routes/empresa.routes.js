const express = require('express');
const router = express.Router();
const empresa = require('../controllers/empresa.controller');

router.get('/', empresa.getEmpresas);
router.post('/', empresa.createEmpresa);
router.get('/:id', empresa.getEmpresa);
router.put('/:id', empresa.editEmpresa);
router.delete('/:id', empresa.deleteEmpresa);

module.exports = router;