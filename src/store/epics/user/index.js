import { ofType } from "redux-observable";
import {getUserData} from "../../../data/client-http";
import emmit from "../../actions";
import * as types from "../../constants";
import {flatMap } from "rxjs/operators";

export const fetchUserEpic = (action$,state$) => {
  return action$.pipe(
    ofType(types.USER.EPIC_FETCH_USER_DATA),
    flatMap(async ()=>{
        if(!state$.value.userStore.uid){
            const user = await getUserData()
            if(user) {
                return emmit.user.actions.actionUpdateUser(user)
            }else{
                return emmit.user.actions.actionClearUserStore()
            }
        }else{
            return emmit.user.actions.actionUpdateUser({...state$.value.userStore})
        }
    })
  )
};


