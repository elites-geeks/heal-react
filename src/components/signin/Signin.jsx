import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
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
      {/* <Input placeHolder={'User Name'} />
      <InputPassWord />
      <Button  onClick={()=>(dispatch(login))} >
        Submit
      </Button> */}
      <Form>
        <Form.Group controlId="formBasiUserName">
          <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={()=>(dispatch(login))}>
              search
              </Button>
              
              </Form>
              </Card.Body>
              </Card>
    </>
  );
}

export default SignIn;