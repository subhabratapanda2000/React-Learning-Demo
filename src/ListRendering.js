import React from 'react'
import Person from './Person'

function ListRendering() {
    // const nameList=['Samrat', 'Arnab', 'Tuhin']
    // const names=nameList.map(name=><h2>{name}</h2>)

    const personList =[
        {
            id: 1,
            name: 'John',
            age: 22,
            skill: 'Javascript'
        },
        {
            id: 2,
            name: 'JRony',
            age: 21,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Samrat',
            age: 23,
            skill: 'Angular'
        }
    ]

    // const persons=personList.map(person=><h3>Hii, I'm {person.name}, my age is {person.age}, my skill is {person.skill}</h3>)
  
    const persons=personList.map(person=><Person key={person.id} person={person}/>)
    return (
    <div>

        {persons}



        {/* {names} */}

        {/* {
            nameList.map(name=><h2>{name}</h2>)
        } */}


        {/* <h2>{nameList[0]}</h2>
        <h2>{nameList[1]}</h2>
        <h2>{nameList[2]}</h2> */}
    </div>
  )
}

export default ListRendering