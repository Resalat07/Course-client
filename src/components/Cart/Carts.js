import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Carts = () => {
    const carts= useLoaderData()
    return (
        <div className='d-flex justify-content-center align-items center course-details'>
            


            <Card className="text-center mb-5 mt-5 shadow m-4 w-75 ">

                <h2 className='text-primary'>Cart Page</h2>
               
                <Card.Body>
                <Card.Img variant="top" className="w-75" src={carts.picture} />
                    <Card.Title>{carts.headerName}</Card.Title>
                    <Card.Text>
                        Price : {carts.Price}
                        <p>Life time access</p>
                        <input type="text" placeholder='Enter tour address' />
                        
                    </Card.Text>
                    
                    
                    <Button variant="warning text-white">Buy Now </Button>
                </Card.Body>
                
            </Card>
            
            
        </div>
    );
};

export default Carts;