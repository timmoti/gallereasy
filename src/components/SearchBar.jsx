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
      <div className="searchbar">
        <input onChange={event => this.handleInput(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
