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
                  Atualmente trabalho sistema de calibração WebCal feito para
                  salvar e calcular planilhas de calibração.
                  <br />
                  Eu adiciono novos recursos ao sistema como gerar pdf e excel.
                  <br />
                  <br />
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">As minhas funções</li>
                    <li className="list-group-item">
                      Mantenho o sistema funcionado
                    </li>
                    <li className="list-group-item">
                      Adiciono novos recursos ao WebCal
                    </li>
                    <li className="list-group-item">
                      Atualiza o Aplicativo do WebCal Mobile
                    </li>
                  </ul> */}
                </p>
                <small className="text-muted">05/2022</small>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">
                  Comecei a trabalhar como desenvolvedor na ENGECAL Calibração,
                  fazendo manutenção do software WebCal utilizando o framework
                  CakePhp e a biblioteca Jquery.
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
