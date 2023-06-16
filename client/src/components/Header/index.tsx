import logo from "assets/docker-logo.png"
import styles from "./Header.module.scss"
import classNames from "classnames"
import { NavLink } from 'react-router-dom';

export default function Header() {

    const rotas = [
        {
            label: 'Ínicio',
            to: '/'
        },

        {
            label: 'Cadastro',
            to: '/cadastro'
        },

        {
            label: 'Carregar Linguagens',
            to: '/carregar-linguagens'
        }
    ]
    
    return (
        <header className={styles.header}>
            <div className={styles.header__menu}>
                <div className={styles.header__menu__logo}>
                    <a href="/"><img src={logo}></img></a>
                    <nav className={styles.header__menu__nav}>
                        <ul className={styles.header__menu__nav__itens}>
                            {rotas.map((rota, index) => (
                                <li className={styles.header__menu__nav__itens__item}>
                                    <NavLink to={rota.to} className={({ isActive, isPending }) => classNames({
                                        [styles.header__menu__nav__itens__item__link]: true,
                                        [styles['header__menu__nav__itens__item__link--ativo']]: isActive
                                    })}>{rota.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}