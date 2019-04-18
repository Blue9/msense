import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style = {{width: this.props.width + 'em', height: this.props.height + 'em'}}
        className="square"
        onClick={() => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </div>
    );
  }
}
