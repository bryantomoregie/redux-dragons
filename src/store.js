import { createStore } from 'redux'
import { dragons } from './dragons'

const initialState = {
    homeDragons: dragons,
    warDragons: []
}

const reducer = ( state, action ) => {

    switch(action.type){
        case 'SEND_TO_WAR':
            var { clickedDragon } = action;
            var { homeDragons, warDragons } = state;
            return {
                ...state,
                homeDragons: homeDragons.filter( dragon => dragon != clickedDragon ),
                warDragons: [ ...warDragons, clickedDragon ]
            }
        break
        case 'SEND_HOME':
            var { clickedDragon } = action;
            var { homeDragons, warDragons } = state;
            return {
                ...state,
                warDragons: warDragons.filter( dragon => dragon != clickedDragon ),
                homeDragons: [ ...homeDragons, clickedDragon ]
            }
        break
    }

    return state
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())