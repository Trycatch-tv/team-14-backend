// Importar el objeto 'pool' que establece la conexión con la base de datos
import pool from '../db/dbConfig.js'

// Controlador para obtener todos los directores
const getDirectores = async (req, res) => {
    // Realizar la consulta para obtener todos los directores
    const [directors] = await pool.query("SELECT * FROM directores")
    // Enviar la respuesta como un objeto JSON con todos los directores
    res.json(directors)
}

// Controlador para crear un nuevo director
const createDirector = async (req, res) => {
    try {
        // Obtener los datos del nuevo director desde el cuerpo de la petición
        const { nombres, apellidos, pais, fecha_nacimiento } = req.body;
        // Insertar los datos del nuevo director en la base de datos, convirtiendo la fecha_nacimiento a un objeto Date
        const result = await pool.query(
            "INSERT INTO directores(nombres, apellidos, pais, fecha_nacimiento) VALUES (?, ?, ?, ?)",
            [nombres, apellidos, pais, new Date(parseInt(fecha_nacimiento))]
        );
        // Si la inserción fue exitosa, enviar una respuesta indicando que se creó el nuevo director
        res.send('Director creado exitosamente')
        console.log(result)
    } catch (error) {
        // Si ocurrió un error, imprimirlo en la consola y enviar una respuesta con el mensaje de error
        console.log(error)
        return res.json({ message: error })
    }
}

// Controlador para obtener un director por su ID
const getDirector = async (req, res) => {
    try {
        // Obtener el ID del director desde los parámetros de la petición
        const { id } = req.params;
        // Realizar la consulta para obtener el director con el ID especificado
        const [director] = await pool.query("SELECT * FROM directores WHERE id_director = ?", [id])
        // Enviar la respuesta como un objeto JSON con el director encontrado
        res.json(director)
    } catch (error) {
        // Si ocurrió un error, imprimirlo en la consola y enviar una respuesta con el mensaje de error
        console.log(error)
        return res.json({ message: error })
    }
}

const updateDirector = async (req, res) => {

    try {
        const { id } = req.params;
        const { nombres, apellidos, pais, fecha_nacimiento } = req.body;

        const resultado = await pool.query(
            "UPDATE directores SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), pais = IFNULL(?, pais), fecha_nacimiento = IFNULL(?, fecha_nacimiento) WHERE id_director = ?",
            [nombres, apellidos, pais, fecha_nacimiento, id]
          );
        if (resultado.affectedRows === 0)
            return res.sendStatus(404).json({
                message: "Director no encontrado",
            });

        const [rows] = await pool.query("SELECT * FROM directores  WHERE id_director = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        console.log(error)
        return res.json({ message: error })
    }
}


const deleteDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query("DELETE FROM directores WHERE id_director = ?", [id])
        if (resultado.affectedRows == 0) return res.status(404).json({
            message: "Director no encontrado",
        });
        res.sendStatus(204);
    }
    catch (err) {
        return res.status(500).json({
            message: "Algo salio mal",
        });
    }
}


export { getDirectores, createDirector, updateDirector, deleteDirector, getDirector }