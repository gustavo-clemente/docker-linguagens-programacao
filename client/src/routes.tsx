import TemplatePadrao from "components/TemplatePadrao"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function AppRouter(){
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<TemplatePadrao/>}></Route>
                </Routes>
            </Router>
        </main>
    )
}