
import pool from '../db/dbConfig.js'


const getUsuarios = async (req, res) => {

    const [usuarios] = await pool.query("SELECT * FROM usuarios")

    res.json(usuarios)
}


const createUsuario = async (req, res) => {
    try {

        const { nombres, apellidos, pais, fecha_nacimiento} = req.body;

        const result = await pool.query(
            "INSERT INTO usuarios(nombres, apellidos, pais, fecha_nacimiento) VALUES (?, ?, ?,?)",
            [nombres, apellidos, pais, fecha_nacimiento]
        );

        res.send('Usuario creado exitosamente')
        console.log(result)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}


const getUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const [usuario] = await pool.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id])

        res.json(usuario)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}

const updateUsuario = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombres, apellidos, pais, fecha_nacimiento} = req.body;

        const resultado = await pool.query(
            "UPDATE usuarios SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), pais = IFNULL(?, pais), fecha_nacimiento = IFNULL(?, fecha_nacimiento) WHERE id_usuario = ?",
            [nombres, apellidos, pais, fecha_nacimiento, id]
          );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Usuario no encontrado",
            });

        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM usuarios WHERE id_usuario = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Usuario no encontrado",
        });
        res.sendStatus(204);
    }
    catch (err) {
        return res.status(500).json({
            message: "Algo salio mal",
        });
    }
}

export {
    getUsuarios,
    createUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario,
}