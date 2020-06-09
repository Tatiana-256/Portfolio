import {ActionsType} from '../actions'


// _______-types_____________

type initialStateType = typeof initialState

const initialState = {
    navMenu: false,
}

const navMenuReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SHOW_NAV_MENU":
            return {
                ...state, navMenu: true
            }
        case "HIGH_NAV_MENU":
            return {
                ...state, navMenu: false
            }
        default: return state
    }
}
export default navMenuReducer


