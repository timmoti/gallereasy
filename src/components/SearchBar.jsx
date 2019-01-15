import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleInput = input => {
    this.setState({
      input
    });
    this.props.handleInputChange(input);
  };

  render() {
    return (
      <div className="searchbar">
        <input onChange={event => this.handleInput(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
