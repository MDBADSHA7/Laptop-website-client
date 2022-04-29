import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;