import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import React from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>  
      <Navbar/>
      <main>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
      </main>
    </Router>
    
  );
}

export default App;
