//list rendering
import React from 'react'
import Person from "./Person.js";

function NameList() {
    /*
    const names = ['Bruce', "Clark", 'Diana']
    const nameList =  names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
    */
    
    //nothing worng in the code but recommended way is refracter JSX in other component
    /*
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30, 
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25, 
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28, 
            skill: 'Vue'
        },
    ]
    const personList = persons.map(persons => (
        <h2>
            I am {persons.name}. I am {persons.age} years old. I know {persons.skill}.
        </h2>
    ))
    return <div>{personList}</div>
    */

    /*
   const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30, 
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25, 
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28, 
            skill: 'Vue'
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} /> )
    return <div>{personList}</div>
    */

    //using index as a key in list rendering: donot use if list is not static, have to be ordered or filtered
    const names = ['Bruce', "Clark", 'Diana', 'Bruce']
    const nameList =  names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>

}

export default NameList
