import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Products from '../Products/Products';
import './ManageProduct.css';
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://warm-harbor-90775.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h1>Manage Products</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Wight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                { 
                    products.length === 0 && <CircularProgress />
                }
                {
                    products.map(product =><Products key={product._id} product={product}></Products>)
                }
             </Table>
        </div>
    );
};

export default ManageProduct;