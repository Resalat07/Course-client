import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user ,loading} =useContext(AuthContext)

    if(loading){
       return <div className='d-flex justify-content-center align-items-center mt-5'><Spinner  animation="grow" variant="warning" /></div>
    }

    if(!user){
        return <Navigate to='/login'state={{ from: location }} replace ></Navigate>
    }
    return children;
    
};

export default PrivateRoute;