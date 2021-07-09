import Main from './containers/Main/Main';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'

function App() {
  return (
    <div style={{height:'100%',minHeight:"100vh",width:'100%', display:'flex', flexDirection:'column' , justifyContent:'space-between'}}>
        <Header />
        <Main />
        <Footer />
    </div>
    
  );
}

export default App;
