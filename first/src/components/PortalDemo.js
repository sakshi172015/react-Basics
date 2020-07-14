//creating portal adding this funciton to other dic except root one
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
