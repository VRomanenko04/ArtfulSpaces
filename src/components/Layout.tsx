import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./blocks/footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;