import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Register.css'

const Register = () => {

    const [error , setError] =useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const { providerLogin ,createUser ,updateUserProfile ,providerGitLogin} = useContext(AuthContext);

    const handleUpdateUserPro = (name , photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleGitHubSignin=()=>{
        providerGitLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    const handleReg = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL =form.photoURL.value;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email ,password)
        .then(result =>{
            const user =result.user;
            console.log(user)
            setError('')
            form.reset()
            handleUpdateUserPro(name ,photoURL)
        })
        .catch(error=>{
            setError(error.message)
            console.log(error)})
    }

    return (
        <div className='d-flex justify-content-center align-items-center course-details'>




            <div>
                <div className='text-primary text-center mb-5'><h1>Register Now</h1></div>
                


                <div className='d-flex justify-content-center align-items-center color p-5 rounded shadow'>

                    <Form onSubmit={handleReg} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control className='w-100' name='name' type="text" placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control className='' name="photoURL" type="text" placeholder="Your Photo" />

                        </Form.Group>
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
                            Register
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
                        <p ><span className='text-primary'><span className='fw-bold'>Or,</span> Register With</span> 


                        <Button onClick={handleGoogleSignin} variant="outline-success" className='m-2'> Google <FaGoogle></FaGoogle>  </Button></p>
                        
                    </div>
                    <div>
                        <p >


                        <Button onClick={handleGitHubSignin} variant="outline-success" className='m-2'> GitHub <FaGithub></FaGithub>  </Button></p>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;