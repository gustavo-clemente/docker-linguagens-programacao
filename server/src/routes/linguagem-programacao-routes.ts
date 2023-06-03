import express from "express";
import container from "../config/container"
import LinguagemProgramacaoController from "../controllers/linguagem-programacao-controller.js";

const router = express.Router();
const linguagemProgramacaoController = container.resolve(LinguagemProgramacaoController)

router
    .get("/linguagem-programacao", linguagemProgramacaoController.listarTodosAction.bind(linguagemProgramacaoController))
    .get("/linguagem-programacao/:id", linguagemProgramacaoController.listarPorIdAction.bind(linguagemProgramacaoController))

export default router

