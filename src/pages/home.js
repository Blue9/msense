import style from '../styles/pages/home.scss';

import React, { Component } from 'react';
import PageComponent from '../components/PageComponent.js';
import Navbar from '../components/Navbar.js';

const images = [
  'http://i.imgur.com/wVpIicX.jpg',
  'http://i.imgur.com/CS8QhJG.jpg',
  'https://i.imgur.com/Kt0jUHf.jpg'
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

    this.state = {
      backgroundOpacities: opacities
    };
    this.backgroundIndex = 0;
    this.updateBackground = this.updateBackground.bind(this);
  }
  updateBackground(direction, index) {
    let newOpacities = this.state.backgroundOpacities;
    newOpacities[this.backgroundIndex] = 0;
    this.backgroundIndex = index;
    newOpacities[this.backgroundIndex] = 1;
    this.setState({ backgroundOpacities: newOpacities });
  }
  render() {
    return (
      <div className="main">
        <div className="image-container" style={{ zIndex: -1, position: 'fixed', top: 0, width: '100vw', height: '100vh' }}>
          {
            this.backgrounds.map((curr, index) => {
              return <img key={index} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: this.state.backgroundOpacities[index],
                transition: 'all .4s ease',
                width: '100vw',
                height: '100vh',
                objectFit: 'cover'
              }} src={curr} />;
            })
          }
        </div>

        <div className="landing" style={{ height: '100vh', width: '100%', position: 'relative' }}>
          <Navbar />
          <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1 style={{
              fontFamily: 'Roboto Slab',
              textAlign: 'left',
              color: 'white',
              fontSize: 80,
              fontWeight: 400,
              display: 'inline-block',
              textShadow: '0 0 20px #000000'
            }}>
              Engineering <br /> World <br /> Health
            </h1>
          </div>
          <div style={{ zIndex: '-1', position: 'absolute', top: 0, width: '100%', height: '100vh' }}>
            <video playsInline autoPlay muted loop
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover'
              }}
            >
              <source src="https://drive.google.com/uc?export=download&id=1SU_lXaSOZg8oBZC_j4VIRlXdwkTbJTj8" type="video/mp4"></source>
            </video>
          </div>
        </div>

        <PageComponent
          text="The opioid epidemic takes 130 lives every day."
          textColor="#003366"
          callback={(o) => this.updateBackground(o, 0)}
        />
        <PageComponent
          text="Access to menstrual hygiene products is a growing problem in India."
          textColor="white"
          callback={(o) => this.updateBackground(o, 1)}
        />
        <PageComponent
          text="my peepee hard?"
          textColor="white"
          callback={(o) => this.updateBackground(o, 2)}
        />
      </div>
    );
  }

}

export default HomePage;
