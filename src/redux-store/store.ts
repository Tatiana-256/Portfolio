import {combineReducers, createStore} from "redux";
import navMenuReducer from "./reducers/reducer";
import formReducer from "./reducers/formReducer";

let reducers = combineReducers({
    navMenu: navMenuReducer,
    contactForm: formReducer
});


const store = createStore(reducers);

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>


export default store;