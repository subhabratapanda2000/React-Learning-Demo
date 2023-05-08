import React, { Component } from 'react'

export class ClickCouner2 extends Component {
  render() {
    const{count, increment} = this.props
    return (
      <div>
        <button onClick={increment}>Click {count} times</button>
      </div>)
  }
}

export default ClickCouner2