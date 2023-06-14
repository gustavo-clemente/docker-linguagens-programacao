import prisma from "../config/prisma";

async function createFixtures() {
    try {
        const linguagens = await prisma.linguagemProgramacao.createMany({
            data: [
                {
                    nome: 'PHP'
                },
                {
                    nome: 'Javascript'
                },
                {
                    nome: 'Python'
                },
                {
                    nome: 'C#'
                }
            ] 
        })

        console.log('Linguagens cadastradas', linguagens)
    } catch (error: any) {
        console.log('Ocorreu um erro ao executar as fixtures', error)
    }
}

createFixtures()