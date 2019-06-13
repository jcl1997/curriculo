import React, { Component } from 'react';
import Photograph from './../img/perfil.png';


export default class Profile extends Component {
  render() {
    return <img src={Photograph} alt="foto" />
  }
}
