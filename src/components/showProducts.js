import React, { useContext } from 'react';
import { ShopContext } from '../contexts/ShopContext';
import {ThemeContext} from '../contexts/ThemeContext';

const ShowProducts = () => {
    const myData = useContext(ShopContext);
    const themeData = useContext(ThemeContext);
    // console.log(themeData);
    // Destructuring 
    const {products} = myData;
       return (
           <div style={{ backgroundColor: themeData.bgColor, color: themeData.textColor }}>
               <h1> All Products </h1>
               {products.map(pro => (
                   <div key={pro.id}>
                       <h3> Name: {pro.name} </h3>
                       <h4> Price: {pro.price} </h4>
                   </div>
               ))}
           </div>
       );
};

export default ShowProducts;