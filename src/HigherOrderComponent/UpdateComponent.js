import React from 'react';

const UpdateComponent= (OriginalComponent, incrementNumber)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               counter: 0
            }
          }
          
      
          increment=() => {
              this.setState(prevState=> {
                  return {
                  counter: prevState.counter+ incrementNumber

                }
              })
          }
        render(){
            return <OriginalComponent
            count={this.state.counter}
            increment={this.increment}
            {...this.props}
            />
        }
    }
    return NewComponent;
}
export default UpdateComponent;