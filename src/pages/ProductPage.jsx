import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductPage() {
    // console.log("ProductPage")
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                //  console.log(response)
                setProducts(response.data);
                setError(null);
            })
            .catch(err => {
                console.error("Errore nel recupero:", err);
                setError("Non è stato possibile caricare i prodotti.");

            });

    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Prodotti</h1>
            <Link to='/' className=" btn btn-primary mb-4">Torna alla Home</Link>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt=""
                                style={{ objectFit: 'contain', height: '200px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price} €</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-primary">Dettagli Prodotti</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}