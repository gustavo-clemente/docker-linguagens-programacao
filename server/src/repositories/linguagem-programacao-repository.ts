import prisma from "../config/prisma";
import { LinguagemProgramacao } from "@prisma/client";

interface FiltrosConsulta {
    nome?: string
}

class LinguagemProgramacaoRepository {
    public async buscarTodos(): Promise<LinguagemProgramacao[]> {
        return prisma.linguagemProgramacao.findMany()
    }

    public async buscarPor(filtros: FiltrosConsulta): Promise<LinguagemProgramacao[]> {
        return prisma.linguagemProgramacao.findMany({
            where: filtros
        })
    }

    public async buscarDuplicata(linguagemProgramacao: LinguagemProgramacao): Promise<LinguagemProgramacao | null> {
        return prisma.linguagemProgramacao.findFirst({
            where: {
                nome: linguagemProgramacao.nome
            }
        })
    }

    public async buscarPorId(id: number): Promise<LinguagemProgramacao | null> {
        return prisma.linguagemProgramacao.findUnique({
            where: { id: id }
        })
    }

    public async salvar(linguagemProgramacao: LinguagemProgramacao): Promise<LinguagemProgramacao> {
        return prisma.linguagemProgramacao.create({ data: linguagemProgramacao })
    }

    public async deletar(linguagemProgramacao: LinguagemProgramacao): Promise<LinguagemProgramacao> {
        return prisma.linguagemProgramacao.delete({
            where: {
                id: linguagemProgramacao.id
            }
        })
    }

    public async atualizar(linguagemProgramacaoExistente: LinguagemProgramacao, linguagemProgramacaoAtualizada: LinguagemProgramacao ): Promise<LinguagemProgramacao>{
        return prisma.linguagemProgramacao.update({
            data:linguagemProgramacaoAtualizada,
            where: {
                id: linguagemProgramacaoExistente.id
            }
        })
    }
}

export default LinguagemProgramacaoRepository