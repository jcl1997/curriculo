import React, { Component } from "react";

export default class Hobbies extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header card-header-text bg-info">
          <div className="card-text">
            <h3 className="card-title text-white">Hobbies</h3>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-folder" />
                &nbsp;Estudar programação
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-walking" />
                &nbsp;Caminhada
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-headphones-alt" />
                &nbsp;Ouvir música
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-gamepad" />
                &nbsp;Jogar video game
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-play" />
                &nbsp;Assisto a filmes, documentários e tutoriais
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-gamepad" />
                &nbsp;Fazer um Fliperama com Retropie
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
