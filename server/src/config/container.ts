import { container } from "tsyringe";
import LinguagemProgramacaoRepository from "../repositories/linguagem-programacao-repository.js";
import LinguagemProgramacaoService from "../services/linguagem-programacao-service.js";


container.register<LinguagemProgramacaoRepository>(LinguagemProgramacaoRepository, { useClass: LinguagemProgramacaoRepository })
container.register<LinguagemProgramacaoService>(LinguagemProgramacaoService, { useClass: LinguagemProgramacaoService })

export default container