import React, { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase.init';
import { } from '@fortawesome/free-solid-svg-icons';

import './Login.css'
const auth = getAuth(app)
const Login = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setUser({});
            })
    }
    return (
        <div>
            {
                user.email ? <button className='SignIn-btn' onClick={handleSignOut}>Sign Out</button>
                    :
                    <div><button className='SignIn-btn' onClick={handleGoogleSignIn}>Google Sign In</button>
                        <br />
                        <button className='SignIn-btn' onClick={handleGithubSignIn}>Github Sign In</button>
                    </div>
            }
            <h1>Name:{user.displayName}</h1>
            <h2>Email Address : {user.email}</h2>
            <img src={user.photoURL} alt="" />
        </div >
    );
};

export default Login;