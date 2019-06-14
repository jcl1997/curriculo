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
            <ul className="list-group list-group-flush">
              <il className="list-group-item">
                <p className="card-text">
                  <i className="fas fa-folder" />
                  &nbsp;Estudar programação
                </p>
              </il>
              <il className="list-group-item">
                <p className="card-text">
                  <i className="fas fa-walking" />
                  &nbsp;Caminhada
                </p>
              </il>
              <il className="list-group-item">
                <p className="card-text">
                  <i className="fas fa-headphones-alt" />
                  &nbsp;Ouvir música
                </p>
              </il>
              <il className="list-group-item">
                <p className="card-text">
                  <i className="fas fa-gamepad" />
                  &nbsp;Jogar video game
                </p>
              </il>
              <il className="list-group-item">
                <p className="card-text">
                  <i className="fas fa-play" />
                  &nbsp;Assista a filmes,
                  <br />
                  documentários e tutoriais
                </p>
              </il>
            </ul>
          </div>
      </div>
    );
  }
}
