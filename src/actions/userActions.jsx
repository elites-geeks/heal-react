import { signIn } from '../reducers/utils'

export const login =(payload)=>{
    return{
        type:'LOGIN',
        payload
    }
}
const loginServer =  (username, password) =>async (dispatch) => {
    try{
        const user = await signIn(username, password);
        return dispatch(login(user))
    }catch(err){
        console.log(err.message)
    }
}

export const logout = ()=>{
    return {
        type:'LOGOUT'
    }
}


export {  loginServer };