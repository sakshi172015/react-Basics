import React from 'react'
//click button in parent component function execute in parent component
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
