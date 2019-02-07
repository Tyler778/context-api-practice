import React, { Component } from 'react'


export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron mt-2 mx-2">
        <h1 className="display-3 text-center">Context API Practice</h1>
        <p className="lead text-center">This is a simple exercise I made for myself to practice and help myself understand Context API with ReactJS.</p>
        <hr className="my-4"></hr>
        <p className="text-center">I'll be utilizing state and methods in the context component and injecting them in different components.</p>
        <p className="lead text-center mt-4">
          <a className="btn btn-primary btn-lg text-center px-3" href="/" role="button">Go to First Example</a>
        </p>
      </div>
    )
  }
}
