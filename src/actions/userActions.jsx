const login = ()=>{
    console.log('inside login')
    return({
        type:'LOGIN',
    })
}
const userType = (userType)=>{
    return({
        type:'USER_TYPE',
        payload:{
            userType
        }
    })
}

export {userType , login};