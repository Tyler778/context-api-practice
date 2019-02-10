import React, { Component } from 'react'
import NumberInput from './NumberInput'
import Screen from './Screen'
import '../App.css'

export default class FirstExampleComponent extends Component {
  render() {
    return (
      <div class="jumbotron mt-2 mx-2 bg-info num_input">
        <h1 class="display-3">Calculator Component</h1>
        <p class="lead">Simple Functionality and data within the context.js and injected.</p>
        <NumberInput>

        </NumberInput>
        <Screen>

        </Screen>
      </div>
    )
  }
}


