import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './InventoryItem.css'
const InventoryItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className='product-title'>Our-Collection</h2>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                >
                </Product>)
                }

            </div>
            {/* {
                products.map(product => <li>
                    {product.name}
                    <img src={product.image} alt="" />
                    {product.discription}
                </li>)

            } */}
        </div>
    );
};

export default InventoryItem;