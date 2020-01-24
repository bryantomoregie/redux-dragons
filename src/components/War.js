import React from 'react'
import DragonCard from './DragonCard'
import { useSelector, useDispatch } from 'react-redux'

function War() {
    
    const dragons = useSelector(state => state.warDragons )
    const dispatch = useDispatch()

    return (
        <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#f98181' }}>
            <h1>War</h1>
            {dragons.map( dragon => (
                <DragonCard 
                    dragon={dragon} 
                    onClick={() => dispatch({ type: 'SEND_HOME', clickedDragon: dragon })} 
                />
            ))}
        </div>
    )
}



export default War