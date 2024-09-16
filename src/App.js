
import './App.css';
import Header from './components/Header';
import FirstPage from './components/FirstPage';
import Products from './components/Products';
import Details from './components/Details';
import Payment from './components/Payment';
import Thanks from './components/Thanks';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>

      
      <Header></Header>

      <Routes>
        
        <Route path='/' Component={FirstPage}></Route>
        <Route path='/Products' Component={Products}></Route>
        <Route path='/detail' Component={Details}></Route>
        <Route path='/Payment' Component={Payment}></Route>
        <Route path='/thanks' Component={Thanks}></Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
