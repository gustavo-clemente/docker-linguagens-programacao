import { ReactComponent as Logo } from "assets/docker-logo.svg"
import styles from "./Header.module.scss"

export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Logo/>
            </div>
            <div className={styles.header__texto}>
                Docker Linguagens
            </div>
        </header>
    )
}