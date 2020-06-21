// _______-types_____________

import {ActionsType} from "../actions";

type initialStateType = typeof initialState

const initialState = {
    messageAfterFillingForm: false,
    formLoader: false
}

const formReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SHOW_MESSAGE":
            return {
                ...state, messageAfterFillingForm: true
            }
        case "LOADER_ON":
            return {
                ...state, formLoader: true
            }
        case "LOADER_OFF":
            return {
                ...state, formLoader: false
            }
        default:
            return state
    }
}


export default formReducer

