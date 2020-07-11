import React from 'react';

const Greeting = props => {
    return(
        <div>
            <h1>Hello, {props.first} {props.last}</h1>
            {props.children}
        </div>
    )
}

export default Greeting