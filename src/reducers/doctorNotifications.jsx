const docNotif = []

const doctorNotifications = (state = docNotif, action) => {

    const { payload, type } = action;
    switch (type) {
        case 'PUSH':
            return [...state,payload]
        default:
            return state;
    }
}

export default doctorNotifications;