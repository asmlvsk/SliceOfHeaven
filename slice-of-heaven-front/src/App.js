import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CartContainer from './components/CartPage/CartContainer';
import MainPage from './components/MainPage/MainPage';
import NavBarContainer from './components/MainPage/NavigationBar/NavBarContainer';
import Menu from './components/MenuPage/Menu';

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <MainPage/>}/>
          <Route exact path="/menu" render={() => <Menu/>}/>
          <Route exact path="/cart" render={() => <CartContainer/>}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
