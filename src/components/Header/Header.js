import React, { useState } from 'react';
import { useContext } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'
import Course from '../Course/Course';
import ReactSwitch from "react-switch";


import Overlay from 'react-bootstrap/Overlay';
import { useRef } from 'react';





const Header = (props) => {

    const [show, setShow] = useState(false);
    const target = useRef(null);

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

            <Navbar bg="" expand="lg">
                <Container >
                    <Navbar.Brand href="#" className='tx-dr' ><Link className='font-text-nav' to='/'>EasyLearn</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >



                        </Nav>


                        <div className='d-flex justify-content-center'>
                            <Nav.Link className='mt-3' href="#action1"><Link className='font-text' to='/'>Course</Link></Nav.Link>
                            <Nav.Link className='mt-3 m-2' href="#action2"> <Link className='font-text' to='/faqs'>FAQ</Link></Nav.Link>
                            <Nav.Link className='mt-3 m-2' href="#action2"> <Link className='font-text' to='/blog'>Blogs</Link></Nav.Link>

                            <Nav.Link>
                                <div className="switch mt-3 m-2">

                                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />

                                </div>
                            </Nav.Link>





                            <>
                                <p ref={target} onMouseOver={() => setShow(!show)}>
                                    <Nav.Link  href="#action1" className='m-2 mt-3'>{user?.photoURL ?
                                        <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image>
                                        : <FaUser></FaUser>}
                                    </Nav.Link>
                                </p>
                                <Overlay target={target.current} show={show} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            {user?.displayName}
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </>






                            






                            <Nav.Link href="#deets" className='d-flex justify-content-center'>{
                                user?.uid ?
                                    <>
                                        <h5 className='p-2 mt-2 font-text'>{user?.displayName}</h5>
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