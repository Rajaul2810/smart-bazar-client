import axios from 'axios';
import React, { useState } from 'react';
import './AddProduct.css';
const AddProduct = () => {
    const [product, setProduct] = useState({
        name:'',
        wight:'',
        price:'',
        photo:''
    })
    const handleProduct = (e)=>{
        const newProduct = { ...product };
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
        
        e.preventDefault();
        console.log(product)
       
    }
    const handleImage = e =>{
        console.log(e.target.files[0])
        const imgData = new FormData();
        imgData.set('key','215e5d0c93c573db61bf888279ec3b42');
        imgData.append('image', e.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', 
           imgData)
          .then(function (response) {
            const newProduct = { ...product };
            newProduct[e.target.name] = response.data.data.display_url;
            setProduct(newProduct);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const handleAddProduct = (e)=>{
        const newProduct = {...product}
        fetch('https://warm-harbor-90775.herokuapp.com/addProducts',{
            method:'POST',
            headers: {'Content-type':'Application/json'},
            body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
        })
        e.preventDefault();
    }
    return (
        <div>
            <form action="">
              <b>Product Name:</b> <input onBlur={handleProduct} type="text" name="name"/>
              <b> Wight:</b> <input onBlur={handleProduct} type="text" name="wight"/> <br/>
              <b>Price:</b>  <input onBlur={handleProduct} type="text" name="price"/>
             <b> Photo :</b> <input onChange={handleImage} type="file" name="photo"/> <br/>
             <button onClick={handleAddProduct} type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddProduct;