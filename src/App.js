import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header.jsx';
import Featured from './components/featured/index.jsx';
import VunueNfo from './components/venueNfo/index';
import Highlight from './components/Highlights/index.jsx';
import Pricing from './components/pricing/index.jsx';
import Location from './components/location/index.jsx';
import Footer from './components/header_footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
