const initialState={
  loggedUserName:""
};

export const loginReducer = (state=initialState, action) => {
    switch (
      action.type 
    ) {
      case 'USER_LOGGED':
        console.warn("odebralem USER_LOGGED w reducerze i zapisuje do state");
            return {...state, loggedUserName: action.loggedUserName};
      case 'USER_LOGGED_OUT':
            return {...state, loggedUserName: ""};
      default:
        return state;
    }
  };