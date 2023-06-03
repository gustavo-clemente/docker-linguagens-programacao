import { injectable } from "tsyringe";
import LinguagemProgramacaoRepository from "../repositories/linguagem-programacao-repository.js";
import { Request, Response } from "express";

@injectable()
export default class LinguagemProgramacaoController{

    constructor(private linguagemProgramacaoRepository : LinguagemProgramacaoRepository){
       
    }

    async listarTodosAction(request: Request, response: Response){
        const linguagensProgramacao = await this.linguagemProgramacaoRepository.buscarTodos()
        response.status(200).send(linguagensProgramacao)
    }

    async listarPorIdAction(request: Request, response: Response){
        const id = parseInt(request.params.id);
        const linguagemProgramacao = await this.linguagemProgramacaoRepository.buscarPorId(id);

        if(linguagemProgramacao === null){
            response.status(404).send({msg: 'Id não localizado'})
        }

        response.status(200).send(linguagemProgramacao)
    }
}