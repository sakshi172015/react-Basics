import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            //setCount(count + 1)//only 1 incrementes
            //instead of passing this we will pass a function that has access to previous count value
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/*}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            Instead of doing this better to do one mentioned below
            */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5 times</button>
        </div>
    )
}

export default HookCounter2
