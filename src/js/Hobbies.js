import React, { Component } from 'react';

export default class Hobbies extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-header card-header-text bg-info">
              <div className="card-text">
                <h4 className="card-title text-white">Hobbies</h4>
              </div>
          </div>
          <div className="card-body">
              <p className="card-text">
                <i className="fas fa-folder" />
                &nbsp;Estudar programação
              </p>
              <p className="card-text">
                <i className="fas fa-walking" />
                &nbsp;Caminhada
              </p>
              <p className="card-text">
                <i className="fas fa-headphones-alt" />
                &nbsp;Ouvir música
              </p>
              <p className="card-text">
                <i className="fas fa-gamepad" />
                &nbsp;Jogar video game
              </p>
              <p className="card-text">
                <i className="fas fa-play" />
                &nbsp;Assista a filmes,
                <br />
                documentários e tutoriais
              </p>
          </div>
      </div>
    );
  }
}
