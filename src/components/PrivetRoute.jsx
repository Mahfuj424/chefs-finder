import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    const location = useLocation();
    if (loading) {
        return <progress  className='progress w-56 mt-20'></progress>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate state={{ form: location }} replace to='/login'></Navigate>
    );
};

export default PrivetRoute;