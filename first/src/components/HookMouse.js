//calling once useEfect event listener
//use ComponentDidMount using hooks 
import React, {useState, useEffect } from 'react'

function HookMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        //cleanup after re render
        return () => {
            console.log("component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])//doenot effect on any props or state or only initial render
    return (
        <div>
            Hooks x = {x} Y = {y}
        </div>
    )
}

export default HookMouse
