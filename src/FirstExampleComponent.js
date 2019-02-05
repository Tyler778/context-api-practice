import React, { Component } from 'react'

export default class FirstExampleComponent extends Component {
  render() {
    return (
      <div class="jumbotron mt-2 mx-2 bg-info">
        <h1 class="display-3">First Component</h1>
        <p class="lead">Simple Functionality and data within the context.js and injected.</p>
        <hr class="my-4"></hr>
        <p>--work--</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/" role="button">--work--</a>
        </p>
      </div>
    )
  }
}
