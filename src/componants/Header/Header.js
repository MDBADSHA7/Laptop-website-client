import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='header-container'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/productdetails">Inventory-Items</Link>
                <Link to="/manageinventory">Manage-Inventory</Link>
                <Link to="/myitems">My-Items</Link>
                <Link to="/blogs">Blogs</Link>
                {
                    user ? <button onClick={handleSignOut}>LogOut</button> : <Link to="/login">LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;