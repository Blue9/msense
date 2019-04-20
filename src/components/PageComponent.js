import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Waypoint } from 'react-waypoint';

class PageComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    textColor: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{ width: '90%', maxWidth: '1280px', boxSizing: 'border-box', height: '100vh', paddingLeft: '20vw' }}>
      <div className="padding" style={{ height: '30%' }}></div>
      <Waypoint
        onEnter={this.props.callback}
      />
      <h1 style={{ color: this.props.textColor, fontFamily: 'Montserrat', fontSize: 56, margin: 0 }}>{this.props.text}</h1>
    </div>
  }
}

export default PageComponent;
