const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { res.status(200).send('API para el Cloud Weekend by halejandres') })

module.exports = router