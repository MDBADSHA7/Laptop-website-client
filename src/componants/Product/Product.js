import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { name, image, discription, price, quantity, supplier } = product;
    return (
        <div className='card' style={{ width: "18rem" }}>
            <div> <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="name">{name}</h5>
                    <p class="discription">{discription}</p>
                    <p class="quantity">Quantity: {quantity}</p>
                    <p class="suppliar">Supplier : {supplier}</p>
                    <p class="price">Price : $ {price}</p>
                    <button className='Update-button'>Update</button>
                </div></div>
        </div >
    );
};

export default Product;