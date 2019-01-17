import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
import Icon from '../Icon';
import { ICONS } from '../constants';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      favorited: false
    };
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  };

  //   handleClick = () => {
  //     this.setState({
  //         favorited: !favorited
  //     })
  //   }

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
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          className="image"
        />
        {/* <div className="overlay">
          <Icon name="heart" size="big" />
          <Icon icon={ICONS.HEART} size={30} color="red" />
        </div> */}
        {/* <a href="#">
          <i className="fa fa-heart" />
        </a> */}
      </div>
    );
  }
}

export default Image;
