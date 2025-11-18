import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function DefaultLayout() {


    return (
        <>
            <Header />

            <main className="min-vh-100">
                <Outlet />
            </main>

            <Footer />

        </>

    )
}