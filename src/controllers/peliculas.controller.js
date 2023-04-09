
import pool from '../db/dbConfig.js'


const getPeliculas = async (req, res) => {
    const [peliculas] = await pool.query(`
    SELECT peliculas.*, 
    GROUP_CONCAT(DISTINCT categorias.nombre SEPARATOR ', ') AS categorias,
    GROUP_CONCAT(DISTINCT generos.nombre SEPARATOR ', ') AS generos,
    GROUP_CONCAT(DISTINCT CONCAT(directores.nombres, ' ', directores.apellidos) SEPARATOR ', ') AS directores
FROM peliculas
LEFT JOIN pelicula_categoria ON peliculas.id_pelicula = pelicula_categoria.id_pelicula
LEFT JOIN categorias ON pelicula_categoria.id_categoria = categorias.id_categoria
LEFT JOIN pelicula_genero ON peliculas.id_pelicula = pelicula_genero.id_pelicula
LEFT JOIN generos ON pelicula_genero.id_genero = generos.id_genero
LEFT JOIN pelicula_director ON peliculas.id_pelicula = pelicula_director.id_pelicula
LEFT JOIN directores ON pelicula_director.id_director = directores.id_director
GROUP BY peliculas.id_pelicula;

`);

const peliculasConCategoriasYGenerosYDirectores = peliculas.map(pelicula => {
    const categorias = pelicula.categorias ? pelicula.categorias.split(', ') : []; // convertimos la cadena en un arreglo
    const generos = pelicula.generos ? pelicula.generos.split(', ') : []; // convertimos la cadena en un arreglo
    const directores = pelicula.directores ? pelicula.directores.split(', ') : []; // convertimos la cadena en un arreglo
    delete pelicula.categorias; // eliminamos el atributo categorias del objeto pelicula
    delete pelicula.generos; // eliminamos el atributo generos del objeto pelicula
    delete pelicula.directores; // eliminamos el atributo directores del objeto pelicula
    return { ...pelicula, categorias, generos, directores }; // devolvemos un nuevo objeto con los arreglos de categorías, géneros y directores
});

res.json(peliculasConCategoriasYGenerosYDirectores);

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
