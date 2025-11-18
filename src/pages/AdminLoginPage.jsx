import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminLoginPage(){
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = false;
        if (!isAuthenticated){
            navigate("/admin/login");
        }

    }, [navigate]);

    return(

        <div className="wrapper d-flex gap-2 p-3">
            <div className="sidebar">
                <ul className="list-unstyled">
                    <li>
                        <NavLink to="/admin">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Blog</NavLink>
                    </li>

                </ul>

            </div>

        </div>




    );




}