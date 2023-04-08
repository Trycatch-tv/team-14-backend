
import pool from '../db/dbConfig.js'


const getGeneros = async (req, res) => {

    const [generos] = await pool.query("SELECT * FROM generos")

    res.json(generos)
}


const createGenero = async (req, res) => {
    try {

        const { nombre, comentario } = req.body;

        const result = await pool.query(
            "INSERT INTO generos(nombre, comentario) VALUES (?, ?)",
            [nombre, comentario]
        );

        res.send('Genero creado exitosamente')
        console.log(result)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}


const getGenero = async (req, res) => {
    try {

        const { id } = req.params;

        const [genero] = await pool.query("SELECT * FROM generos WHERE id_genero = ?", [id])

        res.json(genero)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}

const updateGenero = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombre, comentario } = req.body;

        const resultado = await pool.query(
            "UPDATE generos SET nombre = IFNULL(?, nombre), comentario = IFNULL(?, comentario) WHERE id_genero = ?",
            [nombre, comentario, id]
        );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Genero no encontrado",
            });

        const [rows] = await pool.query("SELECT * FROM generos  WHERE id_genero = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deleteGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM generos WHERE id_genero = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Genero no encontrado",
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
    getGeneros,
    createGenero,
    getGenero,
    updateGenero,
    deleteGenero
}