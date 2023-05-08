import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }

    inputHandler=() => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.inputHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParent