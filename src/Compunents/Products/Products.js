import React from 'react';

const Products = (props) => {
    const {name,wight,price,_id} = props.product;
    const deleteProduct = (id) =>{
         fetch(`https://warm-harbor-90775.herokuapp.com/delete/${id}`,{
             method:'DELETE'
         })
         .then(res => res.json())
         .then(result =>{
             console.log('deleted');
         })
    }
    return (
        <tbody>
        <tr>
          <td>{name}</td>
          <td>{wight}</td>
          <td>{price}</td>
          <td><button onClick={()=>deleteProduct(_id)}>delete</button></td>
        </tr>
      </tbody>
    );
};

export default Products;