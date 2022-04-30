import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h1>This is home page:{products.length}</h1>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
            <Footer></Footer>
        </div>
    );
};

export default Home;