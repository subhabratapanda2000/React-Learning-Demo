//Change done in feature1 branch
import React, {useEffect, useState} from 'react'

function AutoCount() {
    const [count, setCount] = useState(0)
    const autoCount=()=>{
        setCount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
        const interval=setInterval(autoCount,1000)
        return()=>{clearInterval(interval)}
    },[])
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default AutoCount