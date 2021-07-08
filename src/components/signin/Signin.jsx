import Input from '../InputName/Input'
import InputPassWord from '../InputPassword/Input'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import {login} from '../../actions/userActions'
function SignIn() {
  const dispatch = useDispatch()
  return (
    <>
    <Card  style={{ width: '24rem', height: 'fit-content' ,padding: '10px' }}>
    <Card.Body>
    <Card.Title>Sign In</Card.Title>
      <Input placeHolder={'User Name'} />
      <InputPassWord />
      <Button  onClick={()=>(dispatch(login))} >
        Submit
      </Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default SignIn;