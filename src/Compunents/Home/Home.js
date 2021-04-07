import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';

const Home = () => {
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="container">
            {
                products.length  === 0 && <CircularProgress />
                
            }
            <div className="row">
            {
                products.map(product => <Shop key={product._id} product={product}></Shop>)
            }
            </div>
           
        </div>
    );
};

export default Home;