import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick={()=>props
        .greetHandler('Child Component')}>Click</button>
        
    </div>
  )
}

export default ChildComp