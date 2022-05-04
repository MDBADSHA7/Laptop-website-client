import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './InventoryItem.css'
const InventoryItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/laptop')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className='product-title'>Our-Collection</h2>
            <h1 className='Total-item'>Total product : {products.length}</h1>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                >
                </Product>)
                }

            </div>
        </div>
    );
};

export default InventoryItem;