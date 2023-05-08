import React,{useState} from 'react'

function ObjectMergeEx() {
    const [name, setName]=useState({firstName: '', lastName: ''})
  return (
    <div>
        <form>
            {/* Hooks dosesn't merge the object automatically, when try to update another field then previous field will delete it,
            like if we input the firstname and after that when we going to input the lastname, then firstName will be deleted.
            TO solve this problem we need manually merge the object.
            That's why (...name) is used here. */}
            <input type="text" value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})}></input>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}></input>
        </form>
        <h2>First name: {name.firstName}</h2>
        <h2>Last name: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default ObjectMergeEx