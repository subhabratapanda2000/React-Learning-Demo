import React from 'react'

function Person({person}) {
  return (
    <div>
        <h3>Hii, I'm {person.name}, my age is {person.age}, my skill is {person.skill}</h3>
    </div>
  )
}

export default Person