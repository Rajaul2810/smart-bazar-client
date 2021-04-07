
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const { _id } = useParams();
    const [data, setData] = useState({});
    console.log(_id);
    console.log(data);
    useEffect(() => {
        fetch(`https://warm-harbor-90775.herokuapp.com/product/${_id}`)
            .then(res => res.json())
            .then(data => setData(data[0]))
    }, [_id])
    const { name, wight, price } = data;

   const [loggedInUser,setLoggedInUser] = useContext(UserContext);
      console.log(loggedInUser); 
    const handleOrder = () =>{
      const orderDetails = {...loggedInUser, products: data, orderTime: new Date()};
      console.log(orderDetails);
    //    setData(orderDetails)
      fetch('https://warm-harbor-90775.herokuapp.com/addOrder',{
        method:'POST',
        headers: {'Content-type':'Application/json'},
          body:JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data =>{
          if(data){
              alert("your order placed successfully");
          }
      })
    }
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                       
                        <th>Product Name</th>
                        <th>Wight</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>{name}</td>
                        <td>{wight}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={handleOrder}>Checkout</button>
        </div>
    );
};

export default Checkout;