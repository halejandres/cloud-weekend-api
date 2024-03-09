const express = require('express')
const cors = require('cors')
const cancion = require('./routes/cancion')
const root = require('./routes/root')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/cancion', cancion)
app.use('/', root)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})