import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Samrat'
      }
    }

    componentDidMount(){
        setInterval(() =>{
        this.setState({
            name: 'Samrat'
    })
}, 2000)}

  render() {
    console.log('********************************Parent Component********************************')
    return (
      <div>ParentComp {this.state.name}
      <RegularComp name={this.state.name}/>
      <PureComp name={this.state.name}/>
      <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp