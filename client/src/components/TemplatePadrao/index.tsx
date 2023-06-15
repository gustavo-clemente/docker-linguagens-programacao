import Footer from "components/Footer"
import Header from "components/Header"
import styles from './TemplatePadrao.module.scss'
import { Outlet } from "react-router-dom"

export default function TemplatePadrao() {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}