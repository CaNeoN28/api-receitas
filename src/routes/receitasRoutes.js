import express from "express";
import receitasController from "../controllers/receitasControllers.js"

const receitasRoutes = express.Router();

receitasRoutes.get("/receitas", receitasController.listarReceitas)
              .get("/receitas/:id", receitasController.listarReceitasPorId)
              .post("/receitas", receitasController.criarReceita)
              .put("/receitas/:id", receitasController.atualizarReceita)
              .delete("/receitas/:id", receitasController.deletarReceita)

export default receitasRoutes;