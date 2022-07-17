
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  FadeLoader  from 'react-spinners/FadeLoader';
import useAuth from '../../../../hooks/useAuth.js';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <FadeLoader    color={'#30336b'} loading={isLoading}  size={10}   /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;