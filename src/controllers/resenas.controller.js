
import pool from '../db/dbConfig.js'


const getResenas = async (req, res) => {

    const [resenas] = await pool.query("SELECT * FROM resenias")

    res.json(resenas)
}


const createResena = async (req, res) => {
    try {

        const { id_usuario, id_pelicula, titulo, puntuacion, comentario } = req.body;

        const result = await pool.query(
            "INSERT INTO generos(id_usuario, id_pelicula, titulo, puntuacion, comentario ) VALUES (?, ?, ?, ?, ?)",
            [id_usuario, id_pelicula, titulo, puntuacion, comentario]
        );

        res.send('Reseña creada exitosamente')
        console.log(result)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}


const getResena = async (req, res) => {
    try {

        const { id } = req.params;

        const [resena] = await pool.query("SELECT * FROM resenias WHERE id_resenia= ?", [id])

        res.json(resena)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}

const updateResena = async (req, res) => {

    try {
        const { id } = req.params;
        const { id_usuario, id_pelicula, titulo, puntuacion, comentario } = req.body;

        const resultado = await pool.query(
            "UPDATE resenias SET id_usuario = IFNULL(?, id_usuario), id_pelicula = IFNULL(?, id_pelicula) , titulo = IFNULL(?, titulo)  , puntuacion = IFNULL(?, puntuacion)  , comentario = IFNULL(?, comentario)  WHERE id_resenia = ?",
            [id_usuario, id_pelicula, titulo, puntuacion, comentario, id]
        );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Reseña no encontrada",
            });

        const [rows] = await pool.query("SELECT * FROM resenias  WHERE id_resenia = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deleteResena = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM resenias WHERE id_resenia = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Reseña no encontrado",
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
    getResenas,
    createResena,
    getResena,
    updateResena,
    deleteResena,
}