import {InferActionsTypes} from "./store";

export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    showNavMenu: () => ({type: 'SHOW_NAV_MENU'} as const),
    highNavMenu: () => ({type: 'HIGH_NAV_MENU'} as const),
    messageAfterFillingForm: () => ({type: "SHOW_MESSAGE"} as const),
    loaderOn: () => ({type: "LOADER_ON"} as const),
    loaderOff: () => ({type: "LOADER_OFF"} as const)

}