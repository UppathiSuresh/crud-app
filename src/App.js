import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import welcome from './components/WelcomePage/WelcomePage';
import './App.css';


const Home = () => (
  <HomePage />
);

const abc = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (


      <Router>
    <div className="App">      
      <Switch>
      <Route path="/" exact component={Home} ></Route>
      <Route path="/abc" component={abc} ></Route>
      <Route path="/welcome" exact component={welcome} ></Route>
      </Switch>      
    </div>
    </Router>
    );
  }
}

export default App;
