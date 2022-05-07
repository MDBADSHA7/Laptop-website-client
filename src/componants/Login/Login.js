import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, signOut } from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import app from '../../firebase.init';
import { } from '@fortawesome/free-solid-svg-icons';

// Toast

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { Form, Button } from 'react-bootstrap';
import Loading from '../Loading/Loading';
const auth = getAuth(app)
const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
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
    const [validated, setValidated, loading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    if (loading) {
        return <Loading></Loading>
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }



    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('Password should contain at least one special charecter')
            return
        }

        setValidated(true);
        setError('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setPassword('');
                verifyEmail();
            })
            .catch(error => {
                console.error(error);
            })
        event.preventDefault();
    }
    // Send Email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email verification Send');
                toast('sent email')
            })
    }
    // Send Message for Reset password
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Reset password sent')
                toast('Reseat sent email')
            })
    }
    return (
        <div>
            <div className='container-login w-50 mx-auto'>
                <h2 className='text-primary text-center mt-2'>please Login</h2>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please give a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please give a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                    <br />
                    <Button className='mt-2' onClick={handlePasswordReset} variant="danger" type="submit">
                        Forget Password?
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
            </div>
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