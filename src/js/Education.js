import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Educação</h3>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4 className="mb-0 align-middle">
                Análise e Desenvolvimento de Sistemas - ADS
              </h4>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                Faculdade UNA - BARREIRO BELO HORIZONTE - MG
                <br />
                1/2019
              </p>
            </li>
            <li className="list-group-item">
              <h4 className="mb-0 align-middle">Ensino Médio</h4>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                Centro Federal de Educação Tecnológica de Minas Gerais -BELO HORIZONTE - MG
                <br />
                2014/2017
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
