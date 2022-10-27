import React, { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'
import Course from '../Course/Course';
import ReactSwitch from "react-switch";

const Header = (props) => {

    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        props.onChange(theme)
      };


    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>

            <Navbar bg="" className='' expand="lg">
                <Container >
                    <Navbar.Brand href="#">EasyLearn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >



                        </Nav>
                        

                        <div className='d-flex justify-content-center'>
                            <Nav.Link className='mt-3' href="#action1"><Link className='font-text' to='/'>Home</Link></Nav.Link>
                            <Nav.Link className='mt-3 m-2'href="#action2"> <Link className='font-text' to='/faqs'>FAQ</Link></Nav.Link>

                            <Nav.Link>
                            <div className="switch mt-3 m-2">

                                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />

                            </div>
                        </Nav.Link>



                            <Nav.Link href="#action1" className='m-2 mt-2'>{user?.photoURL ?
                                <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image>
                                : <FaUser></FaUser>}
                            </Nav.Link>






                            <Nav.Link href="#deets" className='d-flex justify-content-center'>{
                                user?.uid ?
                                    <>
                                        <h5 className='p-2 mt-2'>{user?.displayName}</h5>
                                        <div className='mt-2'><Button onClick={handleLogOut} className='fw-bold fs-6' variant="outline-danger">Log Out</Button></div>
                                    </>
                                    :
                                    <>
                                        <Link className='font-text p-3' to='/login'>Login</Link>
                                        <Link className='font-text p-3' to='/register'>Register</Link>
                                    </>
                            }

                            </Nav.Link>

                        </div>

                        <div className='d-lg-none d-flex justify-content-center'>
                            <Course></Course>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;