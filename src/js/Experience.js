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
                  O APP mobile da empresa começou a ser refatorado de java para javascript utilizando React Native.
                </p>
                <small className="text-muted">07/2019</small>
              </div>
            </li>
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
                  Depois fui adicionado no novo projeto da ENGECAL o "XNINE".
                  <br />
                  Um sistema de gestão de ativos com a função de fornecer um controle total sobre tudo.
                  <br />
                  Inicialmente fique responsável por criar API's no backend
                </p>
                <small className="text-muted">06/2018</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Comecei a trabalhar com desenvolvedor na ENGECAL Calibração, fazendo manutenção do soft WebCal utilizando o framework CakePhp e a biblioteca Jquery.
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
