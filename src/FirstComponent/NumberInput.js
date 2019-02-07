import React, { Component } from 'react'

export default class NumberInput extends Component {
  render() {
    return (
      <table className="ml-5 mb-5 mt-4 table-bordered">
        <tr>
          <td className="p-3 border-dark">1</td>
          <td className="p-3 border-dark">2</td>
          <td className="p-3 border-dark">3</td>
        </tr>
        <tr>
          <td className="p-3 border-dark">4</td>
          <td className="p-3 border-dark">5</td>
          <td className="p-3 border-dark">6</td>
        </tr>
        <tr>
          <td className="p-3 border-dark">7</td>
          <td className="p-3 border-dark">8</td>
          <td className="p-3 border-dark">9</td>
        </tr>
        <tr>
          <td className="p-3 border-dark border-left-0 border-bottom-0"></td>
          <td className="p-3 border-dark">0</td>
        </tr>
      </table>
    )
  }
}
