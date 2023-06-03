import { container } from "tsyringe";
import LinguagemProgramacaoRepository from "../repositories/linguagem-programacao-repository.js";


container.register<LinguagemProgramacaoRepository>(LinguagemProgramacaoRepository, { useClass: LinguagemProgramacaoRepository })

export default container