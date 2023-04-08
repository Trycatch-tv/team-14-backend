import express from "express";
import routerDirectores from './routes/directores.routes.js'
import routerGeneros from './routes/generos.routes.js'
const app = express();


app.use(express.json())
app.use(routerDirectores)
app.use(routerGeneros)

app.listen(3000, ()=>{
    console.log(':: Server running on port 3000 ::')
})