import React, { Component } from 'react'
import axios from 'axios'

export class FarmerList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         farmers: [],
         errormsg: ''
      }
    }

    componentDidMount(){
        axios.get('http://localhost:8052/farmer/allfarmer')
        .then(response=>{
            this.setState({farmers: response.data})
            console.log(this.state.farmers)
        })
        .catch(error=>{
            this.setState({errormsg: 'Error to retrieve the data'})
            console.log(error)
        })
    }
  render() {
    const {farmers, errormsg} = this.state
    return (
      <div>
        <h2>FarmerList</h2><p>***************************************</p>
        <br/><br/>
        {
         farmers.length?
         farmers.map(farmer => <div key={farmer.id}><h3>{farmer.name}</h3></div>):
        <div> <h3>{errormsg}</h3> </div>
  }
  

      </div>
    )
  }
}

export default FarmerList