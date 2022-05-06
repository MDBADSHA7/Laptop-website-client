import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './InventoryItem.css'
const InventoryItem = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    useEffect(() => {
        fetch('https://intense-spire-59334.herokuapp.com/laptopcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 3);
                setPageCount(pages);
            })
    }, [])
    useEffect(() => {
        fetch(`https://intense-spire-59334.herokuapp.com/laptop?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])

    // Manage-Inventory-Link

    const navigate = useNavigate();
    const ManageInventory = () => {
        navigate('/manageinventory')
    }

    return (
        <div>
            <h1 className='product-title'>Our-Collection</h1>
            <h2 className='text-danger'>Restoke-Quantity</h2>
            <form>
                <input className='Restoke-Quantity' type="number" placeholder='Restoke-Quantity' required></input>
                <br />
                <input className='Restoke' type="submit" value="Restoke" />
            </form>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                >
                </Product>)

                }
            </div>
            <div>
                <Button onClick={ManageInventory} className='Manage-Inventory-btn-2'>Manage-Inventories</Button>
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