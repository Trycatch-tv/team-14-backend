import express from "express";
import routerDirectores from './routes/directores.routes.js'
import routerGeneros from './routes/generos.routes.js'
import routerCategorias from './routes/categorias.routes.js'
import routerUsuarios from './routes/usuarios.routes.js'

const app = express();


app.use(express.json())

app.use(routerDirectores)
app.use(routerGeneros)
app.use(routerCategorias)
app.use(routerUsuarios)


app.listen(3000, ()=>{
    console.log(':: Server running on port 3000 ::')
})