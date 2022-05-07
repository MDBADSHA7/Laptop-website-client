import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import image1 from '../Images/img-1.jpg'
import image2 from '../Images/img-2.jpg'
import image3 from '../Images/img-3.jpg'
import image4 from '../Images/img-4.jpg'
import image5 from '../Images/img-5.jpg'
import image6 from '../Images/img-6.jpg'
import './Inventory.css'

const Inventory = () => {
    const navigateProductDetails = event => {
        Navigate('/productdetails')
    }
    const navigate = useNavigate();
    const ManageInventory = () => {
        navigate('/manageinventory')
    }
    return (
        <div className='container'>
            <h2 className='title'>Inventory-Items</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 ms-5 me-5">
                <div class="col">
                    <div class="card">
                        <img src={image1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Dell-g3</h5>
                            <p class="discription">It has 128 GB SSD and 1TB HDD.It is black color.It is 15 inche HD display</p>
                            <p class="quantity">Quantity:4</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 30000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Asus-core i7</h5>
                            <p class="discription">It is Asus brand laptop,it has 512GB SSD and 1TB HDD,It is white color.</p>
                            <p class="quantity">Quantity:2</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 80000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Apple-Y10</h5>
                            <p class="discription">It is Apple brand laptop.It is 10 generation laptop.It is white color.</p>
                            <p class="quantity">Quantity:3</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 75000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Acer-Core i3</h5>
                            <p class="discription">It is Acer brand laptop,it has no SSD only has 1TB HDD, it is black colour.</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 44000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Acer-Core i5</h5>
                            <p class="discription">It is Acer brand laptop,it has 128GB SSD and 500GB HDD,It has keybord backlight.It is ass colour laptop.</p>
                            <p class="quantity">Quantity:9</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 58000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Asus-Core i7</h5>
                            <p class="discription">It is Asus brand laptop,it has 512GB SSD and 1TB HDD,It is blue color.It is very beautiful laptop.</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : AR TELECOM</p>
                            <p class="price">Price : $ 95000</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={ManageInventory} className='Manage-Inventory-btn-1'>Manage-Inventories</Button>
        </div >
    );
};

export default Inventory;