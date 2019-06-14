import React, { Component } from 'react';
import Header from './Header';
import Perfil from './Perfil';
import Skills from './Skills';
import Education from './Education';

export default class Curriculum extends Component {
  render() {
    return (
      <div>
        <div className="p-2 mx-auto mt-1">
          <Header />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Perfil />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Education />
        </div>
        <div className="p-2 mx-auto mt-1">
          <Skills />
        </div>
      </div>
    );
  }
}
