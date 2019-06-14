import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-white">Habilidades</h1>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-html5 fa-2x align-middle" />&nbsp;HTML e&nbsp;
                <i className="fab fa-css3-alt fa-2x align-middle" />&nbsp;CSS básico
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fas fa-database fa-2x align-middle" />&nbsp;Mysql básico
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fas fa-cogs fa-2x align-middle" />&nbsp;Lógica de programação
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-js fa-2x align-middle" />&nbsp;Javascript básico
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
