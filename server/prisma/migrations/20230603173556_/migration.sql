/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `LinguagemProgramacao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `LinguagemProgramacao_nome_key` ON `LinguagemProgramacao`(`nome`);
