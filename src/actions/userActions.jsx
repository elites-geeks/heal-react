import { signIn } from '../reducers/utils'

const login =(payload)=>{
    return{
        type:'LOGIN',
        payload
    }
}
const loginServer =  (username, password ) =>async (dispatch) => {
    try{
        const user = await signIn(username, password);
        dispatch(login(user))
    }catch(err){
        console.log(err.message)
    }
}



export {  loginServer };