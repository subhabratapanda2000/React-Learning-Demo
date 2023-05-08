import React, { Children, Component } from 'react'
import ChildComp from './ChildComp'

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       msg: "Parent Component"
    }
    this.parentFunc=this.parentFunc.bind(this)
  }
  parentFunc(childName){
    alert(`Called ${this.state.msg} from ${childName}`)
  }
    
  render() {
    return (
      <div><ChildComp greetHandler={this.parentFunc}/></div>
    )
  }
}

export default ParentComponent