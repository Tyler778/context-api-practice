import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron mt-2 mx-2">
        <h1 class="display-3">Context API Practice</h1>
        <p class="lead">This is a simple exercise I made for myself to practice and help myself understand Context API with ReactJS.</p>
        <hr class="my-4"></hr>
        <p>I'll be utilizing state and methods in the context component and injecting them in different components.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">Go to First Example</a>
        </p>
      </div>
    )
  }
}
