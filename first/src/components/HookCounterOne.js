//conditional useEffect hook
//use useEffect hook instead of componentDidmount and componentDidUpdate
//use effect runs everytime components renders thus update it
import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //just call the useEffect function
    //pass paramters a function that updates
    //for conditional rendering pass second parameter as array which specifies if these vales change then update otherwise dont
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
