import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImagesContainer from './components/ImagesContainer';
import getImages from './data/getImages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  handleInputChange = async input => {
    try {
      const images = await getImages(input);
      this.setState({
        images
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar handleInputChange={this.handleInputChange} />
        <ImagesContainer images={this.state.images} />
      </div>
    );
  }
}

export default App;
