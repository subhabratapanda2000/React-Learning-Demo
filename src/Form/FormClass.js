import React, { Component } from 'react'

export class FormClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: ''
      }
    }
    userNameHandler=(event) => {
        this.setState({ userName: event.target.value })
    }
    save=event => {alert(`Hello ${this.state.userName}`)
event.preventDefault()}

  render() {
    return (
      <form >
        <label>Username</label>
        <input type="text"
        value={this.state.userName}
        onChange={this.userNameHandler}></input><br/>
        <button type="submit" onClick={this.save}>Save</button>
      </form>
    )
  }
}

export default FormClass