import React, { Component } from 'react';
import Profile from './Profile';
import Contact from './Contact';
import About from './About';
import Hobbies from './Hobbies';
import Follow from './Follow';

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="p-2 mx-auto mt-1">
          <Profile />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Contact />
        </div>
        <div className="p-2 mx-auto mt-1">
          <About />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Hobbies />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Follow />
        </div>
      </div>
    );
  }
}
