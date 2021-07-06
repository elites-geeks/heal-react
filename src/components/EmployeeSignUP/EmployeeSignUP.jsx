import  Input  from '../InputName/Input'

import  InputPassWord  from '../InputPassword/Input'

import  Button  from '../Buttonsignin/Button'

function ClientSignUp() {
    return (
      <>
      <Input placeHolder={'User Name'}/>
      <Input placeHolder={'DateOfBirth'}/>
      <Input placeHolder={'Email'}/>
      <Input placeHolder={'PhoneNum'}/>
      <InputPassWord/>
      <Input placeHolder={'UlpoadImage'}/>
      <Input placeHolder={'Gender'}/>
      <Input placeHolder={'Field'}/>
      <Input placeHolder={'YearsOfExp'}/>
      <Input placeHolder={'Employer'}/>
      <Button/>
    
      </>
      
    );
  }
  
  export default ClientSignUp;