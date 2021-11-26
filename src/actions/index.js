export const userLogged = (loggedUserName) => ({
    type: 'USER_LOGGED',       
    loggedUserName
});

export const userLoggedOut = () => ({
    type: 'USER_LOGGED_OUT',
})