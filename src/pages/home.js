import style from '../styles/pages/home.scss';

import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';

const images = [
  'https://i.imgur.com/ASkmbOc.jpg',
  'https://i.imgur.com/DuLiWAt.jpg',
  'https://i.imgur.com/ycTHnvV.jpg'
];

function preloadImage(url) {
  (new Image()).src = url;
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.backgrounds = images;
    this.backgrounds.map(preloadImage);

    let opacities = new Array(this.backgrounds.length).fill(0);
    opacities[0] = 1;

    this.state = {
      backgroundOpacities: opacities
    };
    this.backgroundIndex = 0;
    this.updateBackground = this.updateBackground.bind(this);
  }
  updateBackground(direction, index) {
    let newOpacities = this.state.backgroundOpacities;
    newOpacities[this.backgroundIndex] = 0;
    this.backgroundIndex = index + (direction.currentPosition === Waypoint.above ? 1 : -1);
    newOpacities[this.backgroundIndex] = 1;
    this.setState({ backgroundOpacities: newOpacities });
  }
  render() {
    return (
      <div className="main">
        <div className="image-container" style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '100vh' }}>
          {
            this.backgrounds.map((curr, index) => {
              return <img key={index} style={{
                position: 'absolute',
                top:0,
                left:0,
                opacity: this.state.backgroundOpacities[index],
                transition: 'all .4s ease',
                width: '100vw',
                height: '100vh',
                objectFit: 'cover'
              }} src={curr} />;
            })
          }
        </div>
        <div style={{ width: '70vw', height: '90vh', paddingLeft: '30vh' }}>
          <div style={{ width: '50vw', height: '30vh' }}></div>
          <h1 style={{ color: 'black' }}>ENGINEERING</h1>
          <Waypoint
            onLeave={(o) => this.updateBackground(o, 0)}
          />
        </div>
        <div style={{ width: '70vw', height: '90vh', paddingLeft: '30vh' }}>
          <div style={{ width: '50vw', height: '30vh' }}></div>
          <h1 style={{ color: 'white' }}>WORLD</h1>
          <Waypoint
            onLeave={(o) => this.updateBackground(o, 1)}
          />
        </div>
        <div style={{ width: '70vw', height: '90vh', paddingLeft: '30vh' }}>
          <div style={{ width: '50vw', height: '30vh' }}></div>
          <h1 style={{ color: 'white' }}>HEALTH</h1>
          <Waypoint
            onLeave={(o) => this.updateBackground(o, 2)}
          />
        </div>
      </div>
    );
  }

}

export default HomePage;
