import React from 'react';
const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninjas => {
    if(ninjas.age > 20 ) {
        return (
            <div className="ninja" key={ninjas.id}>
                <div>Name: {ninjas.name}</div>
                <div>Age: {ninjas.age}</div>
                <div>Belt: {ninjas.belt}</div>
                <button onClick={() => {deleteNinja(ninjas.id)}}>Delete Ninja</button>
            </div>
            )
        } else {
            return null;
       }
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )

}

export default Ninjas;