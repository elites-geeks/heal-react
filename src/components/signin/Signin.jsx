import Input from '../InputName/Input'
import InputPassWord from '../InputPassword/Input'
import Button from 'react-bootstrap/Button'
import {useDispatch} from 'react-redux'
import {login} from '../../actions/userActions'
function SignIn() {
  const dispatch = useDispatch()
  return (
    <>
      <Input placeHolder={'User Name'} />
      <InputPassWord />
      <Button placeHolder={'Submit'} onClick={()=>(dispatch(login))} >
        Submit
      </Button>
    </>
  );
}

export default SignIn;