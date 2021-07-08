const user = {
    isLoggedIn: false,
    userType: ''
}

const userReducer = (state = user, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: !state.isLoggedIn }
        case 'USER_TYPE':
            return {...state, userType:payload.userType}
        default:
            return state;
    }
}

export default userReducer;