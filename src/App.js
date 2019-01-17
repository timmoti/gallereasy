import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SearchPage from './components/SearchPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/favourites" component={SearchPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
