import *  as types from '../../constants'

const initialState = {
  name: '',
  uid:null,
};

const userStore = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER.ACTION_UPDATE_USER_STORE:
      return { ...payload };
    case types.USER.ACTION_CLEAR_USER_STORE:
      return {...initialState}
      default:
      return state;
  }
};

export default userStore;
