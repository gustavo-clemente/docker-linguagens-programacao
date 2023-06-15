import styles from './Footer.module.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__titulo}>
                <h2>Docker Linguagens</h2>
            </div>
            <div className={styles.footer__descricao}>
                <p>
                    Esse Projeto foi desenvolvido com o objetivo de práticar o desenvolvimento de frontend/backend com o node,
                    além da criação e orquestração de containers com o docker.
                    A ideia do projeto veio de um exercicio de anexação do modulo de Dockerização da pós graduação em Software Architecture da FIAP.
                </p>
            </div>
            <div className={styles.footer__contato}>
                <a className={styles.footer__contato__link} href='#'><FaLinkedinIn  /></a>
                <a className={styles.footer__contato__link} href='#'><FaGithub /></a>
            </div>
        </footer>
    )
}