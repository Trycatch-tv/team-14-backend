import express from "express";
import routerDirectores from './routes/directores.routes.js'
const app = express();


app.use(express.json())
app.use(routerDirectores)

app.listen(3000, ()=>{
    console.log(':: Server running on port 3000 ::')
})