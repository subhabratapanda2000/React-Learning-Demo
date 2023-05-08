import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }

    clickHandler=(event)=> {
        alert(this.inputRef.current.value)
        event.preventDefault()
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
  render() {
   
    return (
      <div>
        <form>
            <input type="text" ref={this.inputRef}/>
            <button type="submit" onClick={this.clickHandler}>Click</button>
        </form>
      </div>
    )
  }
}

export default RefsDemo