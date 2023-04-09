
import pool from '../db/dbConfig.js'


const getPeliculas = async (req, res) => {

    const [peliculas] = await pool.query("SELECT * FROM peliculas")
    res.json(peliculas)
}


const createPelicula = async (req, res) => {
    try {

        const { titulo, anio, sinopsis } = req.body;

        const result = await pool.query(
            "INSERT INTO peliculas (titulo, anio, sinopsis) VALUES (?, ?, ?)",
            [titulo, anio, sinopsis]
          );
        res.send('Pelicula creado exitosamente')
        console.log(result)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}


const getPelicula = async (req, res) => {
    try {

        const { id } = req.params;

        const [pelicula] = await pool.query("SELECT * FROM peliculas WHERE id_pelicula = ?", [id])

        res.json(pelicula)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}

const updatePelicula = async (req, res) => {

    try {
        const { id } = req.params;
        const { titulo, anio, sinopsis }  = req.body;

        const resultado = await pool.query(
            "UPDATE peliculas SET titulo = IFNULL(?, titulo), anio = IFNULL(?, anio), sinopsis = IFNULL(?, sinopsis) WHERE id_pelicula = ?",
            [titulo, anio, sinopsis, id]
        );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Pelicula no encontrado",
            });

        const [rows] = await pool.query("SELECT * FROM peliculas  WHERE id_pelicula = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deletePelicula = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM peliculas WHERE id_pelicula = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Pelicula no encontrado",
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
    getPeliculas,
    createPelicula,
    getPelicula ,
    updatePelicula ,
    deletePelicula,
}