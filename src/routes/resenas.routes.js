import { Router } from "express";
import { createGenero, deleteGenero, getGenero, getGeneros, updateGenero } from "../controllers/generos.controller.js";

const router = Router();


router.post('/resenas', createGenero)
router.get('/resenas', getGeneros)
router.get('/resenas/:id', getGenero)
router.patch('/resenas/:id', updateGenero)
router.delete('/resenas/:id', deleteGenero)


export default router;