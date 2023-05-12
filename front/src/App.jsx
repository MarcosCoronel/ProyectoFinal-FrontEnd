import {Routes,Route} from "react-router-dom"
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Ofertas from './Pages/Ofertas'
import Contacto from './Pages/Contacto'
import Favoritos from './Pages/Favoritos'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'

function App() {
    return (
        <>
    <Header/>
    <Sidebar/>
    <Routes>
            <Route patch="/" element={<Home/>}/>
            <Route patch="/Ofertas" element={<Ofertas/>}/>
            <Route patch="/Contacto" element={<Contacto/>}/>
            <Route patch="/Favoritos" element={<Favoritos/>}/>
            <Route patch="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
    ) 
}


export default App
