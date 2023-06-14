import { injectable } from "tsyringe";
import LinguagemProgramacaoRepository from "../repositories/linguagem-programacao-repository.js";
import { Request, Response } from "express";
import { validationResult } from "express-validator/src/validation-result.js";
import LinguagemProgramacaoService from "../services/linguagem-programacao-service.js";
import { ErroDuplicata } from "../services/linguagem-programacao-service.js";

@injectable()
export default class LinguagemProgramacaoController {

    constructor(
        private linguagemProgramacaoRepository: LinguagemProgramacaoRepository,
        private linguagemPromogracaoService: LinguagemProgramacaoService
    ) {

    }

    public async listarTodosAction(request: Request, response: Response) {
        const linguagensProgramacao = await this.linguagemProgramacaoRepository.buscarTodos()
        return response.status(200).send(linguagensProgramacao)
    }

    public async listarPorIdAction(request: Request, response: Response) {
        const id = parseInt(request.params.id);
        const linguagemProgramacao = await this.linguagemProgramacaoRepository.buscarPorId(id);

        if (linguagemProgramacao === null) {
            return response.status(404).send({ msg: 'Id não localizado' })
        }

        return response.status(200).send(linguagemProgramacao)
    }

    public async salvarAction(request: Request, response: Response) {
        const resultadoValidacao = validationResult(request)
        if (resultadoValidacao.isEmpty()) {
            const json = request.body
            const linguagemProgramacao = await this.linguagemPromogracaoService.salvarLinguagem(json)
            if ('error' in linguagemProgramacao) {
                return response.status(400).send(linguagemProgramacao)
            }
            return response.status(201).send(linguagemProgramacao)

        }

        return response.status(400).send({ erros: resultadoValidacao.array() })
    }

    public async deletarAction(request: Request, response: Response) {
        const id = parseInt(request.params.id)
        const linguagemProgramacao = await this.linguagemProgramacaoRepository.buscarPorId(id);
        if (linguagemProgramacao === null) {
            return response.status(404).send({ msg: 'ID não localizado' })
        }

        const linguagemDeletada = await this.linguagemProgramacaoRepository.deletar(linguagemProgramacao)


        return response.status(200).send({
            msg: 'Registro deletado com sucesso',
            data: linguagemDeletada
        })
    }

    public async atualizarAction(request: Request, response: Response) {
        const resultadoValidacao = validationResult(request)
        if (resultadoValidacao.isEmpty()) {

            const id = parseInt(request.params.id)
            const linguagemProgramacao = await this.linguagemProgramacaoRepository.buscarPorId(id);
            const json = request.body
            if (linguagemProgramacao === null) {
                return response.status(404).send({ msg: 'ID não localizado' })
            }

            const linguagemAtualizada = await this.linguagemPromogracaoService.atualizarLinguagem(linguagemProgramacao, json)

            if ('error' in linguagemAtualizada) {
                return response.status(400).send(linguagemAtualizada)
            }

            return response.status(200).send({
                msg: 'Registro atualizado com sucesso',
                data: linguagemAtualizada
            })
        }

        return response.status(400).send({ erros: resultadoValidacao.array() })

    }
}