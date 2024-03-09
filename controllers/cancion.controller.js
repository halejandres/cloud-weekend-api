const db = require('../helpers/mysql-config')

const getCanciones = async (req, res) => {
    const sql = 'SELECT * FROM cancion'
    try{
        const [rows, fields] = await db.connection.query(sql)
        res.json(rows)
    }catch(error){
        console.log(error)
        res.json({
            message: 'Ocurrió un error de conexión con la base de datos'
        })
    }
}

const getCancion = async (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM cancion WHERE id = ?'
    try{
        const [rows, fields] = await db.connection.query(sql, [id])
        res.json(rows)
    }catch(error){
        console.log(error)
        res.json({
            message: 'Ocurrió un error de conexión con la base de datos'
        })
    }
}

const saveCancion = async (req, res) => {
    if(req.body){
        const { titulo, artista, portada, enlace } = req.body
        const sql = `INSERT INTO cancion(titulo, artista, portada, enlace)
                    VALUES(?, ?, ?, ?)`
        try{
            const [rows, fields] = await db.connection.query(sql, [titulo, artista, portada, enlace])
            res.json(rows)
        }catch(error){
            console.log(error)
            res.json({
                message: 'Ocurrió un error de conexión con la base de datos'
            })
        }
    }else{
        res.send({
            message: 'No se enviaron datos en el cuerpo de la petición'
        })
    }
}

const deleteCancion = async (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM cancion WHERE id = ?`
    try{
        const [rows, fields] = await db.connection.query(sql, [id])
        res.json(rows)
    }catch(error){
        console.log(error)
        res.json({
            message: 'Ocurrió un error de conexión con la base de datos'
        })
    }
}

module.exports = { getCanciones, getCancion, saveCancion, deleteCancion }