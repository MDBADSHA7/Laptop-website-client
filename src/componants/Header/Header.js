import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/productdetails">Inventory-Item</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/logout">LogOut</Link>
            </nav>
        </div>
    );
};

export default Header;