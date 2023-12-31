import { Outlet } from "react-router-dom";
import Navbar from "../UI/navbar/Navbar";
import Footer from "../simple/footer/Footer";

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