import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Shop.css';
import { Link } from 'react-router-dom';

const shop = (props) => {
    
    const { name, photo, price ,_id} = props.product;
    return (
        <div className="col md-4">
            <Card >
                <Card.Img variant="top" src={photo}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                      <h3>${price}</h3>
                    <Link to={`/checkout/${_id}`}> <Button variant="primary">Buy Now</Button></Link>
                </Card.Body>
            </Card>
        
       </div>
    );
};

export default shop;