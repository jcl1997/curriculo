import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Experiência</h3>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Ainda no Projeto do XNINE comecei a trabalhar com o frontend Utilizando o React.
                </p>
                <small className="text-muted">01/2019</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                Fui convidado a fazer parte do projeto do novo soft da ENGECAL o XNINE.Um sistema de gestão de ativos(Inicialmente fique responsável por criar API's no backend).
                </p>
                <small className="text-muted">06/2018</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Iniciei minha carreira como desenvolvedor na ENGECAL, fazendo manutenção do soft Webcal.
                </p>
                <small className="text-muted">11/2017</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
