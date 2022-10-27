
import Lottie from "lottie-react";
import React, { useEffect } from 'react';
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import learning from '../../animation/learning.json';
import { AiOutlineArrowRight } from 'react-icons/ai'



const Home = () => {
    const [courseDets, setCourseDets] = useState([])
    useEffect(() => {
        fetch('https://course-server-resalat07.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourseDets(data))
    }, [])

    console.log(courseDets)

    return (
        <div>

            <div >

                <Lottie animationData={learning} loop={true} ></Lottie>


            </div>


            <div >
               

                    <div className="row mt-5">
                        {
                            courseDets.map(courseDet => <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items center"  key={courseDet.course_id}>


                                <Card className="shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className="h-100" src={courseDet.picture} />
                                    <Card.Body>
                                        <Card.Title>{courseDet.headerName}</Card.Title>
                                        <Card.Text>
                                            You can click here for more information
                                        </Card.Text>
                                        
                                            <Link to={`/courseDetail/${courseDet.course_id}`}><Button variant="primary">Go to details <AiOutlineArrowRight></AiOutlineArrowRight></Button></Link>
                                        
                                    </Card.Body>
                                </Card>



                            </div>)
                        }
                    </div>


                
            </div>





        </div>
    );
};

export default Home;