import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImagesContainer from './components/ImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImagesContainer />
      </div>
    );
  }
}

export default App;
