import React from 'react';
import { ShopContext } from '../contexts/ShopContext';

class ShowProducts extends React.Component {

    static contextType = ShopContext;

    render() {
       // console.log(this.context);
       //const { products } = this.context;
    //    console.log(products);
        return (
            <ShopContext.Consumer>
                {contextData => {
                    const { products } = contextData;
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
}
}

export default ShowProducts;