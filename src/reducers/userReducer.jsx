const auth = {
    isLoggedIn: false,
    user: {}
}

const userReducer = (state = auth, action) => {

    const { payload, type } = action;
    switch (type) {
        case 'LOGIN':
            if (payload !== 'Invalid user') {
                
                return { user: { ...payload }, isLoggedIn: true }
            } else {
                return state;
            }
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                user: {}
            }
        default:
            return state;
    }
}

export default userReducer;