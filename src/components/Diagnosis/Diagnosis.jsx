import Input from '../InputName/Input'
import  Button  from '../Buttonsignin/Button'

function ClientProfile() {
    return (
      <>
      <h1>Diagnosis </h1>
      <Input placeHolder={'Symptoms'}/>
      <Input placeHolder={'Period'}/>
      <Input placeHolder={'Signs'}/>
      <Input placeHolder={'Diagnosis'}/>
      <Button placeHolder={'submit'}/>


      
      </>
      
    );
  }
  
  export default ClientProfile;