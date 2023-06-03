import {injectable } from "tsyringe";
import LinguagemProgramacaoRepository from "../repositories/linguagem-programacao-repository";
import { LinguagemProgramacao } from "@prisma/client";


export interface ErroDuplicata{
    error: string
}

@injectable()
export default class LinguagemProgramacaoService{

    constructor(private linguagemProgramacaoRepository: LinguagemProgramacaoRepository){
        
    }

    public async salvarLinguagem(linguagemProgramacao: LinguagemProgramacao): Promise<LinguagemProgramacao | ErroDuplicata>{

        if(await this.linguagemDuplicata(linguagemProgramacao)){
            return {
                error: `${linguagemProgramacao.nome} já foi cadastrado`
            }
        }

        const linguagemProgramacaoCriada = await this.linguagemProgramacaoRepository.salvar(linguagemProgramacao)

        return linguagemProgramacaoCriada


    }

    public async atualizarLinguagem(inguagemProgramacaoExistente: LinguagemProgramacao, linguagemProgramacaoAtualizada: LinguagemProgramacao){
        if(await this.linguagemDuplicata(linguagemProgramacaoAtualizada)){
            return {
                error: `${linguagemProgramacaoAtualizada.nome} já foi cadastrado`
            }
        }

        const linguagemProgramacaoCriada = await this.linguagemProgramacaoRepository.atualizar(inguagemProgramacaoExistente, linguagemProgramacaoAtualizada)

        return linguagemProgramacaoCriada
    }
    

     public async  linguagemDuplicata(linguagemProgramacao: LinguagemProgramacao): Promise<boolean>{

        const linguagemDuplicata = await this.linguagemProgramacaoRepository.buscarDuplicata(linguagemProgramacao)
      
        return linguagemDuplicata !== null
    }
}
