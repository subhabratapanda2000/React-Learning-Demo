import React, {useState} from 'react'

function Counting() {
    const [count, setCount] = useState(0)
  return (
    <div>
        Count: {count}<br />
        {/* By PrevState */}
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>


        {/* By normal state */}
        {/* <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button> */}
    </div>
  )
}

export default Counting