// _______-types_____________

import {ActionsType} from "../actions";

type initialStateType = typeof initialState

const initialState = {
    messageAfterFillingForm: false,
}

const formReducer= (state = initialState, action: ActionsType): initialStateType=>{
    switch (action.type) {
        case "SHOW_MESSAGE":
            return {
                ...state, messageAfterFillingForm: true
            }
        default: return state}
}

export default formReducer