import React from 'react';
import './Product.css'
import { TrashIcon } from '@heroicons/react/solid'
const Product = ({ product }) => {
    const { name, image, discription, price, quantity, supplier, sold } = product;

    return (
        <div className='card' style={{ width: "18rem" }}>
            <div> <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="name">{name}</h5>
                    <p class="discription">{discription}</p>
                    <p class="quantity">Quantity: {quantity}</p>
                    <p class="suppliar">Supplier : {supplier}</p>
                    <p class="price">Price : $ {price}</p>
                    <p className="sold">Sold: {sold}</p>
                    <a className='Delivered-button' href="">Delivered <TrashIcon className='Icon'></TrashIcon></a>
                    {/* <p><TrashIcon className='Icon'></TrashIcon><h1 className="Delivered-button" >Delivered</h1></p> */}
                </div></div>
        </div >
    );
};

export default Product;