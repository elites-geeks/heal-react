import Main from './containers/Main/Main';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'
import Routes from '../src/components/Route/Route'
function App() {
  return (
    <>
        <Header />
        <Routes/>
        <Main />
        <Footer />
    </>
    
  );
}

export default App;
