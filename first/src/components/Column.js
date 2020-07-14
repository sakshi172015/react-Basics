import React from 'react'
//Fragment is used in tables so that there is no div tag between tr and td tag
function Column() {
    const items = []
    //can pass key attribute to fragment
    return (
        <>
        {/* can use shot syntax but cannot pass key attribute to it*/}
            {/*}
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
        */}
            <td>Name</td>
            <td>Sakshi</td>
        </>
    )
}

export default Column
