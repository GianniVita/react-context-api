import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div className="text-center mt-5">
            <h1>404 - Pagina non Trovata</h1>
            <p>La pagina che stai cercando non esiste.</p>
            <Link className="btn btn-primary" to='/'>Torna alla Home</Link>

        </div>
    );


}