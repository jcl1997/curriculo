import React, { Component } from 'react';
import Profile from './Profile';
import Contact from './Contact';
import GoogleMap from './GoogleMap';
import About from './About';
import Hobbies from './Hobbies';
import Follow from './Follow';

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="p-2">
          <Profile />
        </div>
        <div className="p-2">
          <Contact />
        </div>
        <div className="p-2">
          <About />
        </div>
        <div className="p-2">
          <Hobbies />
        </div>
        <div className="p-2">
          <Follow />
        </div>
        <div className="p-2">
          <GoogleMap />
        </div>
      </div>
    );
  }
}
