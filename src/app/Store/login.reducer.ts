import { createReducer, on } from "@ngrx/store";
import { USERTYPE } from "../shared/UserType";
import { loginUser, logoutUser } from "./login.action";

    const initialState:null|USERTYPE = null


    export const userReducer = createReducer<USERTYPE|null>(
        initialState,
        on(loginUser,(state,action)=>{console.log(action);
        ;return action.user}),
        on(logoutUser,()=> null)
    );  
  
// export function userReducer (state=initialState,action){
//     return state
// }