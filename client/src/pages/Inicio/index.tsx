import stylesTema from 'styles/Tema.module.scss'
import styles from './Inicio.module.scss'
import TabelaLinguagens from './TabelaLinguagens'
import BuscadorLinguagem from './BuscadorLinguagem'
import { Linguagem } from 'types/Linguagem'

export default function Inicio(){

    const linguagens : Linguagem[] = [
        {
            id: 1,
            nome: "teste",
            data_criacao: new Date()
        },
        {
            id: 1,
            nome: "teste",
            data_criacao: new Date()
        }
    ]
    return (
        <section className={styles.inicio}>
            <h3 className={stylesTema.titulo}>Linguagens cadastradas</h3>
            <BuscadorLinguagem/>
            <TabelaLinguagens linguagens={linguagens}/>
        </section>
    )
}