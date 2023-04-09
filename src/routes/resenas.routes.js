import { Router } from "express";
import {getResenas,createResena,getResena,updateResena,deleteResena } from "../controllers/resenias.controller.js";

const router = Router();


router.post('/resenas', createResena)
router.get('/resenas', getResenas)
router.get('/resenas/:id', getResena)
router.patch('/resenas/:id', updateResena)
router.delete('/resenas/:id', deleteResena)


export default router;
