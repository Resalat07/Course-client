import React, { createContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Course from '../components/Course/Course';
import Header from '../components/Header/Header';
import ReactSwitch from "react-switch";


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

                    
                    <Container>
                        <Row>
                            <Col lg='2' className='d-none d-lg-block'>

                                <Course></Course>
                            </Col>
                            <Col lg='10'>
                                <Outlet></Outlet>
                            </Col>

                        </Row>
                    </Container>





                    
                </div>
            </ThemeContext.Provider>



        
    );
};

export default Main;