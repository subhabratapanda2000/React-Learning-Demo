import React, { useReducer } from 'react'

const initialState= {
    firstCounter: 0,
    secondCounter: 0
}
const reducer=(state, action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter+ action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter-action.value}
        case 'increment2':
            return {...state,secondCounter: state.secondCounter+ action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
function UseReducerEx2() {
    const [count, dispatcher]=useReducer(reducer, initialState)
  return (
    <div>
        <h3>Counter1: {count.firstCounter}</h3>
        <button onClick={()=>dispatcher({type: 'increment', value: 1})}>Increment1</button>
        <button onClick={()=>dispatcher({type: 'decrement', value: 1})}>Decrement1</button>
        <button onClick={()=>dispatcher({type: 'increment', value: 5})}>Increment5</button>
        <button onClick={()=>dispatcher({type: 'decrement', value: 5})}>Decrement5</button><br/>
        <h3>Counter2: {count.secondCounter}</h3>
        <button onClick={()=>dispatcher({type: 'increment2', value: 1})}>Increment1</button>
        <button onClick={()=>dispatcher({type: 'decrement2', value: 1})}>Decrement1</button>
        <button onClick={()=>dispatcher({type: 'increment2', value: 5})}>Increment5</button>
        <button onClick={()=>dispatcher({type: 'decrement2', value: 5})}>Decrement5</button><br/>
        <button onClick={()=>dispatcher({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerEx2