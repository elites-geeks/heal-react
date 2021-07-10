import Main from './containers/Main/Main';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import { getCookie } from './reducers/utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {login } from './actions/userActions'
function App() {
const dispatch=  useDispatch()
  
  useEffect(()=>{
    const user = getCookie()
    if(user){
      dispatch(login(user))
    }
  });
  return (
    <div style={{ height: '100%', minHeight: "100vh", width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
