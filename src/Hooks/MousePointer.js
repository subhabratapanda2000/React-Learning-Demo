import React, {useEffect, useState} from 'react'

function MousePointer() {
    const [X, setX]=useState(0)
    const [Y, setY]=useState(0)
    const mousePosition=e=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('Mouse Event')
        window.addEventListener('mousemove',mousePosition)
    },[])
  return (
    <div>
        <h3>X: {X} <br/>Y: {Y}</h3>
    </div>
  )
}

export default MousePointer