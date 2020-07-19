//only call hooks in top level not loop, conditional statements
//only call hooks from react function
import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0) //hooks
    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
