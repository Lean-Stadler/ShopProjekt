import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
    return (
        <div className="app-layout">
            <Navbar />

            <main className="page-container">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}