import React, { Component } from 'react';
import getImages from '../data/getImages';
import Image from './Image';

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    try {
      const images = await getImages();
      this.setState({
        images
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="images-container">
        {this.state.images.map((image, i) => {
          return <Image key={i} {...image} />;
        })}
      </div>
    );
  }
}

export default ImagesContainer;
