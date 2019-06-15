import React, { Component } from 'react';
import Photograph from './../img/perfil.png';
import './../css/profile.css';


export default class Profile extends Component {
  render() {
    return <img
    src={Photograph}
    className="
        img-fluid
        img-thumbnail
        rounded-circle
        border-dark
        profile
        mx-auto
        d-block"
      alt="foto" />
  }
}
