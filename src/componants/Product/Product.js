import React, { useEffect, useState } from 'react';
import './Product.css'
import { TrashIcon } from '@heroicons/react/solid'
const Product = ({ product }) => {
    const { name, image, discription, price, quantity, supplier, sold } = product;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    // const handleLaptopDelivered = id => {
    //     const proceed = window.confirm('Do you want to delete?')
    //     if (proceed) {
    //         console.log('Delete user with id,', id)
    //         const url = `http://localhost:5000/user/${id}`
    //         fetch(url, {
    //             method: 'Delete'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deleteCount > 0) {
    //                     console.log('Deleted')
    //                     const remaining = users.filter(user => user._id !== id)
    //                     setUsers(remaining);
    //                 }
    //             })
    //     }

    // }
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
                    <button className='Delivered-button'>Delivered <TrashIcon className='Icon'></TrashIcon></button>
                </div>

            </div>

        </div >

    );
};

export default Product;
