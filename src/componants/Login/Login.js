import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../../firebase.init';
const auth = getAuth(app)
const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;