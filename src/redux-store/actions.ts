import {InferActionsTypes} from "./store";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
     showNavMenu: ()=> ({type: 'SHOW_NAV_MENU'} as const),
     highNavMenu: ()=> ({type: 'HIGH_NAV_MENU'} as const),
    }