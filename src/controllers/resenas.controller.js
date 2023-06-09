
import pool from '../db/dbConfig.js'


const getResenas = async (req, res) => {

    const [resenas] = await pool.query("SELECT resenias.*, usuarios.nombres AS nombre_usuario, usuarios.apellidos AS apellido_usuario, peliculas.titulo AS titulo_pelicula FROM resenias LEFT JOIN usuarios ON resenias.id_usuario = usuarios.id_usuario LEFT JOIN peliculas ON resenias.id_pelicula = peliculas.id_pelicula");

    res.json(resenas);
}


const createResena = async (req, res) => {
    try {

        const { id_usuario, id_pelicula, titulo, puntuacion, comentario } = req.body;

        const result = await pool.query(
            "INSERT INTO resenias(id_usuario, id_pelicula, titulo, puntuacion, comentario ) VALUES (?, ?, ?, ?, ?)",
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
    const resultado = await pool.query("DELETE FROM resenias WHERE id_resenia = ?", [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        message: "No se encontró la reseña a eliminar",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ocurrió un error al eliminar la reseña",
    });
  }
};


export {
    getResenas,
    createResena,
    getResena,
    updateResena,
    deleteResena,
}
