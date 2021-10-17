import React, {createContext, useState} from 'react';



export const ShopContext = createContext();

const ShopContextProvider = props => {

    // Below state is the global state and this state can be accessed in child component
    // Context is alternative of Redux 
// state = {
//     "products": [
//         {id:1, name:"Laptop", price: 200},
//         {id:2, name:"Mobile", price: 300},
//         {id:3, name:"HP Computer", price: 500},
//         {id:4, name:"Iphone10", price: 700},
//         {id:5, name:"Watch", price: 200},
//     ]
// };

const [products, setProducts] = useState({products:[
        {id:1, name:"Laptop", price: 200},
        {id:2, name:"Mobile", price: 300},
        {id:3, name:"HP Computer", price: 500},
        {id:4, name:"Iphone10", price: 700},
        {id:5, name:"Watch", price: 200}
]});

const doSomething = () => {
  return "Please do something my dear!";
};

        return(
            <ShopContext.Provider
            // value={{ ...this.state.products }}
            value={{ ...products, doSome: doSomething }}>
                {props.children}
            </ShopContext.Provider>
        );
   
}

export default ShopContextProvider;