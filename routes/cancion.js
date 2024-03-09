const express = require('express')
const router = express.Router()
const cancionController = require('../controllers/cancion.controller')

router.get('/', cancionController.getCanciones)
router.get('/:id', cancionController.getCancion)
router.post('/', cancionController.saveCancion)
router.delete('/:id', cancionController.deleteCancion)

module.exports = router