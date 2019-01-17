import React, { Component } from 'react';
import Icon from '../Icon';
import { ICONS } from '../constants';
import Favourite from './icons/Favourite';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      favourited: false
    };
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  handleFavourite = () => {
    this.setState({
      favourited: !this.state.favourited
    });
  };

  render() {
    const {
      images: {
        downsized_still: { url }
      },
      title
    } = this.props;

    return (
      <div className="image-container">
        <img
          src={`${url}`}
          alt={`${title}`}
          onMouseOver={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className="image"
        />
        {this.state.hover === true && (
          <Favourite handleFavourite={this.handleFavourite} />
        )}

        {/* {this.state.favourited === true && (
          <Icon icon={ICONS.HEART} size={30} color="red" />
        )} */}
      </div>
    );
  }
}

export default Image;
