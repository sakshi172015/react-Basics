import React from 'react'
import './myStyles.css';
function Stylesheet(props) {
    let className = props.primary ? 'primary'  : ''
    return (
        <div>
            {/*Template literals*/}
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
        </div>
    )
}

export default Stylesheet
