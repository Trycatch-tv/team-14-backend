import { Router } from "express";
import { getDirectores, createDirector, updateDirector, deleteDirector, getDirector } from "../controllers/directores.controller.js";

const router = Router();


router.post('/directores', createDirector)
router.get('/directores', getDirectores)
router.get('/directores/:id', getDirector)
router.patch('/directores/:id', updateDirector)
router.delete('/directores/:id', deleteDirector)


export default router;