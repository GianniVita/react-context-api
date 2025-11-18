import { Outlet } from "react-router-dom";

export default function DefaultError() {
    return (
        <div className="error-layout">
            <main className="min-vh-100">
                <Outlet />
            </main>
        </div>
    );
}