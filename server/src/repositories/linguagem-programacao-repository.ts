import prisma from "../config/prisma";
import { LinguagemProgramacao } from "@prisma/client";

interface FiltrosConsulta {
    nome: string
}

class LinguagemProgramacaoRepository {
    async buscarTodos(): Promise<LinguagemProgramacao[]> {
        return prisma.linguagemProgramacao.findMany()
    }

    async buscarPor(filtros: FiltrosConsulta): Promise<LinguagemProgramacao[]> {
        return prisma.linguagemProgramacao.findMany({
            where: filtros
        })
    }

    async buscarPorId(id: number): Promise<LinguagemProgramacao | null> {
        return prisma.linguagemProgramacao.findUnique({
            where: { id: id }
        })
    }
}

export default LinguagemProgramacaoRepository