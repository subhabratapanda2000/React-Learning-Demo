import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

export class ClickCounter extends Component {
  render() {
    const{count, increment} = this.props
    return (
      <div>
        <button onClick={increment}>Click {count} times</button>
      </div>
      
    )
  }
}

export default UpdateComponent (ClickCounter, 3)