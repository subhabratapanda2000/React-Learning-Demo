import React, { useReducer } from 'react'

const initialState= 0
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function UseReducerEx3() {
    const [count, dispatcher]=useReducer(reducer, initialState)
    const [count2, dispatcher2]=useReducer(reducer, initialState)
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={()=>dispatcher('increment')}>Increment</button>
        <button onClick={()=>dispatcher('decrement')}>Decrement</button>
        <button onClick={()=>dispatcher('reset')}>Reset</button><br/>
        <h3>Count: {count2}</h3>
        <button onClick={()=>dispatcher2('increment')}>Increment</button>
        <button onClick={()=>dispatcher2('decrement')}>Decrement</button>
        <button onClick={()=>dispatcher2('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerEx3