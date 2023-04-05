import express from "express";
import ReceitasController from "../controllers/ReceitasControllers.js";

const ReceitasRoutes = express.Router()

ReceitasRoutes.get("/receitas", ReceitasController.listarReceitas)

export default ReceitasRoutes