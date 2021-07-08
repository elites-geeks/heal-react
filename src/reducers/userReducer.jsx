const user = {
    isLoggedIn: false,
    userType: ''
}

const userReducer = (state = user, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'LOGIN':
            console.log('login reducer')
            return { ...state, isLoggedIn: !state.isLoggedIn }
        case 'USER_TYPE':
            return {...state, userType:payload.userType}
        default:
            console.log('state',state)
            return state;
    }
}

export default userReducer;