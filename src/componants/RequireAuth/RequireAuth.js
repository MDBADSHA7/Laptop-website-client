import React from 'react';
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
const auth = getAuth(app)
const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
};

export default RequireAuth;