import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BaseLayout() {

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </>
    )

}

export default BaseLayout