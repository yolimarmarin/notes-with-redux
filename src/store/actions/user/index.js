import * as types from "../../constants";

const actionUpdateUser = (user) => ({
  type: types.USER.ACTION_UPDATE_USER_STORE,
  payload: user,
});

const actionClearUserStore = (user) => ({
  type: types.USER.ACTION_CLEAR_USER_STORE,
  payload: user,
});

const actions = {
    actionUpdateUser,
    actionClearUserStore
}

const fecthUserData = () =>({
  type: types.USER.EPIC_FETCH_USER_DATA,
})

const epics = {
  fecthUserData,
}

const user = {
    actions,
    epics
}

export default user;
