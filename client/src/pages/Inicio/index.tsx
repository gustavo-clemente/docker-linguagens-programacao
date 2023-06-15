import stylesTema from 'styles/Tema.module.scss'
import styles from './Inicio.module.scss'
import TabelaLinguagens from './TabelaLinguagens'

export default function Inicio(){
    return (
        <section className={styles.inicio}>
            <h3 className={stylesTema.titulo}>Linguagens cadastradas</h3>
            <TabelaLinguagens/>
        </section>
    )
}