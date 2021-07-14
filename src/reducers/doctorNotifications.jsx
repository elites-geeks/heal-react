const docNotif = []

const doctorNotifications = (state = docNotif, action) => {

    const { payload, type } = action;
    switch (type) {
        case 'PUSH':
            const notifs = [...state]
            const notif = notifs.find(elem => elem.savedApp._id === payload.savedApp._id)
            if(notif){
                return notifs
            }else{
                return [...notifs, payload]
            }
        default:
            return state;
    }
}

export default doctorNotifications;