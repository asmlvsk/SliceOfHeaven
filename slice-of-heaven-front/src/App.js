import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import MainPage from './components/MainPage/MainPage';
import NavBarContainer from './components/MainPage/NavigationBar/NavBarContainer';
import Menu from './components/MenuPage/Menu';
import VacancyPage from './components/Vacancies/VacancyPage';
import LoginPage from './components/LoginPage/LoginPage';
import CartPage from './components/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <MainPage/>}/>
          <Route exact path="/menu" render={() => <Menu/>}/>
          <Route exact path="/contact" render={() => <Contact/>}/>
          <Route exact path="/vacancies" render={() => <VacancyPage/>}/>
          <Route exact path="/login" render={() => <LoginPage/>}/>
          <Route exact path="/cart" render={() => <CartPage/>}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
