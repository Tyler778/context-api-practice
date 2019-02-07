import React, { Component } from 'react'


const ContextCreated = React.createContext();

//Provider
class Provider extends Component {
  state = {
    isLoggedIn: false,
    startingNum: 0,
  }

  render() {
    return (
      <ContextCreated.Provider value={{
        ...this.state,
        //Methods in object format
        //method:this.method,
        //method2:this.method2,
      }}>
        {this.props.children}
      </ContextCreated.Provider>
    )
  }
}

const Consumer = ContextCreated.Consumer

export {Provider, Consumer}