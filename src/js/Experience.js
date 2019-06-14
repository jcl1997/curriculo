import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-white">Experiência</h1>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Ainda no Projeto do XNINE comecei a trabalha com o o frontend Utilizando o React.
                </p>
                <small className="text-muted">01/2019</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Fui convidado a fazer parte do projeto do novo soft da ENGECAl o XNINE.Um sistema de gestão de ativos(Utilizando Symfony PHP e React).Iniciamente fique reponsavel por criar Apis no backend.
                </p>
                <small className="text-muted">06/2018</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Iniciei minha carreira como desenvolvedor na ENGECAL, fazendo manutenção do soft Webcal(Utillizando o CakePhp 2.x e jquery).
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
