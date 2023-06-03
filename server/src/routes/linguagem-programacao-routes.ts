import express from "express";
import container from "../config/container"
import LinguagemProgramacaoController from "../controllers/linguagem-programacao-controller.js";
import { body } from "express-validator";

const router = express.Router();
const linguagemProgramacaoController = container.resolve(LinguagemProgramacaoController)

router
    .get("/", linguagemProgramacaoController.listarTodosAction.bind(linguagemProgramacaoController))
    .get("/:id", linguagemProgramacaoController.listarPorIdAction.bind(linguagemProgramacaoController))
    .post(
        "/",
        body("nome")
            .notEmpty().withMessage("O campo 'nome' é obrigatório")
            .isString().withMessage("O campo 'nome' deve ser uma string"),
        linguagemProgramacaoController.salvarAction.bind(linguagemProgramacaoController)
    )
    .delete("/:id", linguagemProgramacaoController.deletarAction.bind(linguagemProgramacaoController))
    .put("/:id",
        body("nome")
            .notEmpty().withMessage("O campo 'nome' é obrigatório")
            .isString().withMessage("O campo 'nome' deve ser uma string"), 
        linguagemProgramacaoController.atualizarAction.bind(linguagemProgramacaoController))

export default router

