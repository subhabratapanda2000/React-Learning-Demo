import React, { Component } from 'react'

 class Counter extends Component {
    
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
         //There have 4 types of Binding Handling for this keyword
         this.increment=this.increment.bind(this) //1st one, and its best for binding handling
     }
     increment(){
        //  this.setState({
        //      count: (this.state.count)+parseInt(this.props.num)
        //  }, ()=>{console.log(this.state.count);})

// this prevstate is use for update the previouse state not the current state
        this.setState((prevState, props)=>({
            count: prevState.count+parseInt(props.num)
        }))
    }
//2nd approach for binding handling
    // increment=()=>{
    //     this.setState((prevState, props)=>({
    //         count: prevState.count+parseInt(props.num)
    //     }))
    // }

     dicrement(){
        this.setState({
            count: this.state.count-1
        })
    }

   reset(){
        this.setState({
            count: 0
        })
    }
     
    render() {
        const {num}=this.props; //Destructuring props, after that we can use num instead of this.props.num in our html layout
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                {/* 3rd approach for binding handling */}
                {/* <button onClick={()=>this.increment()}><h4>Increment</h4></button> */}
                {/* 4th approach for binding handling */}
                {/* <button onClick={this.increment.bind(this)}><h4>Increment</h4></button> */}
                <button onClick={this.increment}><h4>Increment</h4></button>
                <button onClick={()=>this.dicrement()}><h4>Dicrement</h4></button>
                <button onClick={()=>this.reset()}><h4>Reset</h4></button>
            </div>
        )
    }
}

export default Counter
