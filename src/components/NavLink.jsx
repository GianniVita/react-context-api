import { useContext } from "react";
import { NavLink } from "react-router-dom";
import BudgetContext from "../context/BudgetContext";

const menu = [
    {
        id: 1,
        text: 'Home',
        link: '/'
    },
    {
        id: 2,
        text: 'Blog',
        link: '/posts'
    },
    {
        id: 3,
        text: 'About',
        link: '/about'
    },
    {
        id: 4,
        text: 'Contacts',
        link: '/contacts'
    },
    {
        id: 5,
        text: 'Products',
        link: '/products'
    }
];

export default function Navbar() {
    const {budgetMode, setBudgetMode} = useContext (BudgetContext)



    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {
                            menu.map(item => (
                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" to={item.link} aria-current="page">
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={() => {
                        setBudgetMode(!budgetMode)
                        console.log(budgetMode)
                    }} > Budget: {budgetMode ? "ON" : "OFF"}</button>

                </div>
            </div>
        </nav>
    );
}
