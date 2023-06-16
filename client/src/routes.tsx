import TemplatePadrao from "components/TemplatePadrao"
import Inicio from "pages/Inicio"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import styleTema from 'styles/Tema.module.scss'

export default function AppRouter(){
    return (
        <main className={styleTema.container}>
            <Router>
                <Routes>
                    <Route path="/" element={<TemplatePadrao/>}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path="cadastro"></Route>
                        <Route path="carregar-linguagens"></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}