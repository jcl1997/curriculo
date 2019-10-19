import React, { Component } from 'react';
import './../css/map.css';

export default class MapContainer extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header card-header-text bg-success">
          <div className="card-text">
            <h3 className="card-title text-white">
              Endereço
            </h3>
          </div>
        </div>
        <div className="card-body">
          <p>
            <i className="fas fa-map-marked-alt">
              &nbsp;R. Romero Gomes Vieira, 419 - Mangueiras, Belo Horizonte - MG, 30666-330
            </i>
          </p>
        </div>
      </div>
    );
  }
}
