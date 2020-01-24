import React from 'react'
import DragonCard from './DragonCard'


function War() {
    
    const dragons = [] // <-- Use a hook to retrieve war dragons from state
    const dispatch = null // <-- Use a hook to get the dispatch function

    return (
        <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#f98181' }}>
            <h1>War</h1>
            {dragons.map( dragon => (
                <DragonCard dragon={dragon} onClick={() => null /* Dispatch an action that will move a dragon home */} />
            ))}
        </div>
    )
}



export default War