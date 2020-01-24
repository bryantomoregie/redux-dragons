import React from 'react'
import DragonCard from './DragonCard'

function Home() {

    const dragons = [] // <-- Use a hook to retrieve home dragons from state
    const dispatch = null // <-- Use a hook to get the dispatch function

    return (
        <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#00ffd8' }}>
            <h1>Home</h1>
            {dragons.map(dragon => (
                <DragonCard dragon={dragon} onClick={() => null /* Dispatch an action that will move a dragon to war */} />
            ))}
        </div>
    )
}



export default Home