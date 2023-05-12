import { Outlet } from "react-router-dom"
import Header from '../Components/Header'
import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"

function PublicLayouts() {
    return(
        <>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
        </>
    )
}

export default PublicLayouts