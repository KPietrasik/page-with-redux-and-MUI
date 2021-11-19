export const loginReducer = (state={}, action) => {
    switch (
      action.type 
    ) {
      case 'USER_LOGGED':
           state.loggedUsername = action.loggedUserName;

        return state;
      default:
        return state;
    }
  };