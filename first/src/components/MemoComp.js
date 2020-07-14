import React from 'react'


//what pure compoent is to class component, memo is to function component 
function MemoComp({name}) {
    console.log("Rendering Memo Component")
    return (
        <div>
            
        </div>
    )
}

export default React.memo(MemoComp)
