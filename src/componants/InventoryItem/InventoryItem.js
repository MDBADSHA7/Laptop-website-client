import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './InventoryItem.css'
const InventoryItem = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    useEffect(() => {
        fetch('http://localhost:5000/laptopcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 3);
                setPageCount(pages);
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/laptop?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])
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
            {/* paigination */}
            <div className='paigination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                </select>
            </div>
        </div>
    );
};

export default InventoryItem;