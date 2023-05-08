import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

export class HoverCounter extends Component {
   
  render() {
    const{count, increment} = this.props
    return (
      <div>
        <button onMouseOver={increment}>{this.props.name} Hover {count} times</button>
      </div>
      
    )
  }
}

export default UpdateComponent(HoverCounter, 2)