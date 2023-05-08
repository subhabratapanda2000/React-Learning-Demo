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
function UseReducerEx() {
    const [count, dispatcher]=useReducer(reducer, initialState)
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={()=>dispatcher('increment')}>Increment</button>
        <button onClick={()=>dispatcher('decrement')}>Decrement</button>
        <button onClick={()=>dispatcher('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerEx