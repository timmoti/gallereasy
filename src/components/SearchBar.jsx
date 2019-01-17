import React, { Component } from 'react';
import debounce from 'lodash/debounce';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInput = debounce(input => {
    this.setState({
      input
    });
    this.props.handleInputChange(input);
  }, 300);

  render() {
    return (
      <div>
        <input
          className="searchbar"
          onChange={event => this.handleInput(event.target.value)}
          placeholder="Start searching for images!"
        />
      </div>
    );
  }
}

export default SearchBar;
