import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const CourseDetails = () => {
    const ref =useRef()

    const courses = useLoaderData()
    console.log(courses);
    return (
        
            <div className='print'>
                <div>
                    <div>
                        <Card className="text-center mb-5 mt-5 shadow">
                            <Card.Header>
                                <ReactToPrint trigger={()=><Button >Download Pdf <FaDownload className='m-2'></FaDownload></Button>} content={()=>ref.current}>
                                </ReactToPrint>
                                
                                </Card.Header>
                            <Card.Body >
                                <div ref={ref} className="mb-4">
                                <Card.Img variant="top" className="w-75" src={courses.picture} />
                                <Card.Title>{courses.headerName}</Card.Title>
                                <Card.Text>
                                    <span className='fw-bold fs-5'>Description:</span> {courses.description}
                                </Card.Text>
                                <Card.Text>
                                    <span className='fw-bold fs-5'>Description:</span> {courses.requirements}
                                </Card.Text>
                                </div>
                                <Link className='' to={`/cart/${courses.course_id}`}>
                                    <Button variant="success">Get Premium Access {courses.Price}</Button></Link>
                            </Card.Body>

                        </Card>
                    </div>
                </div>
                
            </div>

            

        
    );
};

export default CourseDetails;