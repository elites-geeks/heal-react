import  Input  from '../InputName/Input'
import DateOfBirth from '../DateOfBirth/DateOfBirth'
import Email from '../Email/Email'
import PhoneNum from '../PhoneNum/PhoneNum'
import  InputPassWord  from '../InputPassword/Input'
import UlpoadImage from '../UlpoadImage/UlpoadImage'
import Gender from '../Gender/Gender'
import  Button  from '../Buttonsignin/Button'

function ClientSignUp() {
    return (
      <>
      <Input/>
      <DateOfBirth/>
      <Email/>
      <PhoneNum/>
      <InputPassWord/>
      <UlpoadImage/>
      <Gender/>
      <Button/>
      </>
      
    );
  }
  
  export default ClientSignUp;