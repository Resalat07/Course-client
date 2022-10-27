import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Login = () => {
    const [error , setError] =useState('');

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { signIn } = useContext(AuthContext);
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
       

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email ,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            form.reset()
            setError('')
            navigate(from, { replace: true })
        })
        .catch(error=>{
            setError(error.message)
            console.log(error)})
    }
    return (
        <div className='d-flex justify-content-center align-items-center course-details'>

        <div>
            <div className='text-primary text-center mb-5'><h1>Login Now</h1></div>
            


            <div className='d-flex justify-content-center align-items-center color p-5 rounded shadow'>

                <Form  onSubmit={handleLogIn}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='' name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='' name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-muted m-3">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <br />
                    <Form.Text className="text-muted">

                    </Form.Text>
                    <Form.Text className="text-muted">
                    <p>{error}</p>
                    </Form.Text>
                </Form>
            </div>
            <br />

            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <p ><span className='text-primary'><span className='fw-bold'>Or,</span> Go to </span> <Link to='/register'>register page.</Link> 


                    </p>
                </div>
            </div>
        </div>


    </div>
    );
};

export default Login;