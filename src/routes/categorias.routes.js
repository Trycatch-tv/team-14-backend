import { Router } from "express";
import { createCategoria, deleteCategoria, getCategoria, getCategorias, updateCategoria } from "../controllers/categorias.controller.js";


const router = Router();


router.post('/categorias', createCategoria)
router.get('/categorias', getCategorias)
router.get('/categorias/:id', getCategoria)
router.patch('/categorias/:id', updateCategoria)
router.delete('/categorias/:id', deleteCategoria)


export default router;