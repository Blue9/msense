import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Waypoint } from 'react-waypoint';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="navbar" style={{color: 'black'}}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
      </ul>
    </div>
  }
}

export default Navbar;
