
import pool from '../db/dbConfig.js'


const getCategorias = async (req, res) => {

    const [categorias] = await pool.query("SELECT * FROM categorias")

    res.json(categorias)
}


const createCategoria = async (req, res) => {
    try {

        const { nombre,  descripcion } = req.body;

        const result = await pool.query(
            "INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)",
            [nombre, descripcion]
        );

        res.send('Categoria creada exitosamente')
        console.log(result)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}


const getCategoria = async (req, res) => {
    try {

        const { id } = req.params;

        const [categoria] = await pool.query("SELECT * FROM categorias WHERE id_categoria = ?", [id])

        res.json(categoria)
    } catch (error) {

        console.log(error)
        return res.json({ message: error })
    }
}

const updateCategoria = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombre, comentario: descripcion } = req.body;

        const resultado = await pool.query(
            "UPDATE categorias SET nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion) WHERE id_categoria = ?",
            [nombre, descripcion, id]
        );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Categoria no encontrada",
            });

        const [rows] = await pool.query("SELECT * FROM categorias  WHERE id_categoria = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM categorias WHERE id_categoria = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Categoria no encontrada",
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
    getCategorias,
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria
}