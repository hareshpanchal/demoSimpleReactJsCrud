import React from 'react';
import { ShopContext } from '../contexts/ShopContext';
// import ShowProducts from './showProducts';

const Nav = () => {
    
    // useContext only used in functional components
    const myData = React.useContext(ShopContext);
    
        const { products } = myData;
        return(
            <div>
                <h1> We have total {products.length} Products </h1>
            </div>
        );
    
}

export default Nav;