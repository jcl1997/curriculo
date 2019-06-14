import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-white">Educação</h1>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <il className="list-group-item">
              <h2 className="mb-0 align-middle">
                Análise e Desenvolvimento de Sistemas - ADS
              </h2>
            </il>
            <il className="list-group-item">
              <p className="mb-0 align-middle">
                Faculdade UNA - BARREIRO BELO HORIZONTE - MG
                <br />
                1/2019
              </p>
            </il>
          </ul>
        </div>
      </div>
    );
  }
}
