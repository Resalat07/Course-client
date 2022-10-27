import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()
    return (
        <div className='text-center'>



            <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
            <br />
            {error && (
                <div>
                    <p className='text-red-500'>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            )}
            <p>Go to  <Link to='/'>Home</Link></p>




        </div>
    );
};

export default ErrorPage;