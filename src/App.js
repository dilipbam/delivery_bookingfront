import logo from './logo.svg';
import './App.css';
import 'jquery';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Container from './Container/Container';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}
export default App;