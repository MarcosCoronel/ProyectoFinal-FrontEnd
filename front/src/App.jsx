import {Routes,Route} from 'react-router-dom'
import PublicLayouts from "./Layouts/PublicLayouts"
import NotFound from "./Pages/NotFound"
import Home from "./Pages/Home"
import Contacto from './Pages/Contacto'
import Favoritos from './Pages/Favoritos'
import Ofertas from './Pages/Ofertas'


function App() {
    return (
     <Routes>
        <Route path="/" element={<PublicLayouts/>}>
            <Route path="/" element={<Home />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/Favoritos" element={<Favoritos />}/>
            <Route path="/Ofertas" element={<Ofertas />}/>
       </Route>

       <Route path="*" element={<NotFound/>} />
     </Routes>
    ) 
}


export default App
