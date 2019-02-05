import React, { Component } from 'react'


const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    isLoggedIn: false,
    startingNum: 0,
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        //Methods in object format
        //method:this.method,
        //method2:this.method2,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}