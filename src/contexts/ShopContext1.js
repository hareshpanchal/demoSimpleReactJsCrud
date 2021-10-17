import React, {createContext} from 'react';


// const ShopContext is the name of the file.
export const ShopContext = createContext();

class ShopContextProvider extends React.Component {

    // Below state is the global state and this state can be accessed in child component
    // Context is alternative of Redux 
state = {
    "products": [
        {id:1, name:"Laptop", price: 200},
        {id:2, name:"Mobile", price: 300},
        {id:3, name:"HP Computer", price: 500},
        {id:4, name:"Iphone10", price: 700},
        {id:5, name:"Watch", price: 200},
    ]
};

doSomething = () => {
  return "Please do something my dear!";
};

    render(){
        return(
            <ShopContext.Provider
            // value={{ ...this.state.products }}
            value={{ ...this.state, doSome: this.doSomething }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

export default ShopContextProvider;