import { Router } from "express";
import { createPelicula, deletePelicula, getPelicula, getPeliculas, updatePelicula } from "../controllers/peliculas.controller.js";


const router = Router();


router.post('/peliculas', createPelicula)
router.get('/peliculas', getPeliculas)
router.get('/peliculas/:id', getPelicula)
router.patch('/peliculas/:id', updatePelicula)
router.delete('/peliculas/:id', deletePelicula)


export default router;