import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {

    // Method 4
    //short circuit operator
    return this.state.isLoggedIn && <div><h2>Welcome Samrat</h2></div>



    // Method 3
    // return this.state.isLoggedIn ?
    // (
    //     <div><h2>Welcome Samrat</h2></div>
    // ):
    // (
    //     <div><h2>Welcome User</h2></div>
    // )



// Method 2
    // let msg
    // if(this.state.isLoggedIn){
    //     msg= <div><h2>Welcome Samrat</h2></div>
    // }
    // else {
    //     msg= <div><h2>Welcome User</h2></div>
    // }
    // return msg



    //method 1
//    if(this.state.isLoggedIn) {
//     return(
//         <div>
//             <h2>
//                 Welcome Samrat
//             </h2>
//         </div>
//     )
   
//    }
//    else{
//     return(
//         <div>
//             <h2>
//                 Welcome User
//             </h2>
//         </div>
//     )
// }
   
  }
}

export default ConditionalRendering