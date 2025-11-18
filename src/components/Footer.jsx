import { Link } from "react-router-dom";

export default function Footer() {

    return (


        <footer className="py-4 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Company</h3>
                        <p className="lead">
                            Lorem, ipsum dolor.
                        </p>
                    </div>
                    <div className="col">
                        <h3>Quick links</h3>
                        <ul className="list-unstyled">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/posts'}>Blog</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contacts'}>Contacts</Link></li>
                            <li><Link to={'/products'}>Products</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <ul className="list-unstyled">
                            <li><Link to={'/'}>Cookies</Link></li>
                            <li><Link to={'/'}>Privacy</Link></li>
                            <li><Link to={'/admin'}>Admin</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </footer>
    )
}


