import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImagesContainer from './ImagesContainer';
import getImages from '../data/getImages';

class SearchPage extends Component {
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
      <div>
        <SearchBar handleInputChange={this.handleInputChange} />
        <ImagesContainer images={this.state.images} />
        <footer>
          <span>Gallereasy POC web app</span>
          <span>2359 media</span>
        </footer>
      </div>
    );
  }
}

export default SearchPage;
