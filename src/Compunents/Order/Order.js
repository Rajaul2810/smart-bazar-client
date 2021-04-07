import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css';
const Order = () => {
  const [orders,setOrders] = useState([])
  console.log(orders);

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  useEffect(()=>{
     fetch('http://localhost:4000/orderDetails?email='+loggedInUser.email)
     .then(res=> res.json())
     .then(data =>setOrders(data));
  },[])
 
    return (
        <div>
            <h4> Total Order: {orders.length}</h4>
            {
                orders.map(order=><div>
                    <p>Your Name: {order.name}</p>
                    <p>Email: {order.email}</p>
                     <p>Order Time: {order.orderTime}</p>
                    <p>Product Name: {order.products.name}</p>
                </div>)
            }
        </div>
    );
};

export default Order;