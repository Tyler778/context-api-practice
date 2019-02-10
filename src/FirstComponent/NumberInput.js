import React, { Component } from 'react'
import '../App.css'

export default class NumberInput extends Component {
  render() {
    return (
      <table className="ml-4 mb-0 mt-4 table-dark calc-input table-hover mb-4 some_style">
        <tr>
          <td className="p-3">1</td>
          <td className="p-3">2</td>
          <td className="p-3">3</td>
        </tr>
        <tr>
          <td className="p-3">4</td>
          <td className="p-3">5</td>
          <td className="p-3">6</td>
        </tr>
        <tr>
          <td className="p-3">7</td>
          <td className="p-3">8</td>
          <td className="p-3">9</td>
        </tr>
        <tr>
          <td className="p-3">0</td>
          <td className="p-3">C</td>
          <td className="p-3">D</td>
        </tr>
      </table>
    )
  }
}
