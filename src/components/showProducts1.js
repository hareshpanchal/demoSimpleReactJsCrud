import React, { useContext } from 'react';
import { ShopContext } from '../contexts/ShopContext';

const ShowProducts = () => {
        return (
            <ShopContext.Consumer>
                {contextData => {
                    const { products, doSome } = contextData;
                    console.log(doSome());
                    return(
                        <div>
                <h1> All Products</h1>
                {products.map(pro => (
                    <div key={pro.id}>
                        <h3>Name: {pro.name}</h3>
                        <h4>Price: {pro.price}</h4>
                    </div>
                ))}
            </div>
                    );
    }}
</ShopContext.Consumer>
        );

};

export default ShowProducts;