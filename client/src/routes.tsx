import TemplatePadrao from "components/TemplatePadrao"
import Inicio from "pages/Inicio"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function AppRouter(){
    return (
        <main>
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