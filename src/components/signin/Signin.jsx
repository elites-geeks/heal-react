import Input from '../InputName/Input'
import InputPassWord from '../InputPassword/Input'
import Button from '../Buttonsignin/Button'

function signin() {
  return (
    <>
      <Input placeHolder={'User Name'} />
      <InputPassWord />
      <Button placeHolder={'Submit'} />
    </>
  );
}

export default signin;