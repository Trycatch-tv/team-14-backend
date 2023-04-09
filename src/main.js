import express from "express";
import routerDirectores from './routes/directores.routes.js'
import routerGeneros from './routes/generos.routes.js'
import routerCategorias from './routes/categorias.routes.js'
import routerUsuarios from './routes/usuarios.routes.js'
import routerResenas from './routes/resenas.routes.js'
import routerPeliculas from './routes/peliculas.routes.js'
import {PORT} from './config.js'
const app = express();


app.use(express.json())

app.use(routerDirectores)
app.use(routerGeneros)
app.use(routerCategorias)
app.use(routerUsuarios)
app.use(routerResenas)
app.use(routerPeliculas)



app.listen(PORT, ()=>{
    console.log(`:: Server running on port ${PORT} ::`)
})