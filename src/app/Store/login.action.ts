import { createAction, props } from "@ngrx/store";
import { USERLOGIN, USERLOGOUT } from "./ActionTypes";
import { USERTYPE } from "../shared/UserType";


export const loginUser= createAction(
    USERLOGIN,
    props<{user:USERTYPE}>()
)


export const logoutUser= createAction( USERLOGOUT  )