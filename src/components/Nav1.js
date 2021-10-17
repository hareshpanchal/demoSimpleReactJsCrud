import React from 'react';
import { ShopContext } from '../contexts/ShopContext';
// import ShowProducts from './showProducts';

class Nav extends React.Component{
    static contextType = ShopContext;
    render(){
        const {products} = this.context;
        return(
            <div>
                <h1> We have total {products.length} Products </h1>
            </div>
        );
    }
}

export default Nav;