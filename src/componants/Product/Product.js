import React, { useEffect, useState } from 'react';
import './Product.css'
import { TrashIcon } from '@heroicons/react/solid'
const Product = ({ product }) => {
    const { name, image, discription, price, quantity, supplier, sold } = product;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://intense-spire-59334.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleQuantity = event => {
        const Quantity = quantity - 1
        console.log(Quantity)
    }

    return (
        <div className='card' style={{ width: "18rem" }}>
            <div> <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="name">{name}</h5>
                    <p className="discription">{discription}</p>
                    <p className="quantity">Quantity: {quantity}</p>
                    <p className="suppliar">Supplier : {supplier}</p>
                    <p className="price">Price : $ {price}</p>
                    <p className="sold">Sold: {sold}</p>
                    <button onClick={handleQuantity} className='Delivered-button'>Delivered <TrashIcon className='Icon'></TrashIcon></button>
                </div>

            </div>

        </div >

    );
};

export default Product;
