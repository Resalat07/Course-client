import React, { createContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Course from '../components/Course/Course';
import Header from '../components/Header/Header';



import './Main.css'

export const ThemeContext = createContext(null);


const Main = () => {
    const [theme, setTheme] = useState("");
    const getData=(data)=>{
        setTheme(data)
       
    }

    

    return (
        



            <ThemeContext.Provider value={{ theme }}>
                <div className="" id={theme}>


                    <Header onChange={getData}></Header>

                    
                    <Container className=' hScreen'>
                        <Row>
                            <Col lg='2' className='d-none d-lg-block'>

                                <Course></Course>
                            </Col>
                            <Col lg='10'>
                                <Outlet></Outlet>
                            </Col>

                        </Row>
                    </Container>
                    <div className='bg d-flex align-items-end justify-content-center align-items-center'>

                        <p className='text-white'>
                            Copy Right 2022,
                        </p>

                    </div>





                    
                </div>
            </ThemeContext.Provider>



        
    );
};

export default Main;