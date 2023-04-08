import { Router } from "express";
import { createGenero, deleteGenero, getGenero, getGeneros, updateGenero } from "../controllers/generos.controller.js";

const router = Router();


router.post('/generos', createGenero)
router.get('/generos', getGeneros)
router.get('/generos/:id', getGenero)
router.patch('/generos/:id', updateGenero)
router.delete('/generos/:id', deleteGenero)


export default router;