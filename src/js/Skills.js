import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Habilidades</h3>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-html5 fa-2x align-middle" />&nbsp;HTML &nbsp;
                <i className="fab fa-css3-alt fa-2x align-middle" />&nbsp;CSS básico &nbsp;
                <i className="fab fa-bootstrap fa-2x align-middle" />&nbsp;Bootstrap
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-js fa-2x align-middle" />&nbsp;Javascript &nbsp;
                <i className="fab fa-php fa-2x align-middle" />&nbsp;PHP 7
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-symfony fa-2x align-middle" />
                &nbsp;Symfony &nbsp;
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fas fa-database fa-2x align-middle" />
                &nbsp;Sql
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-node-js fa-2x align-middle" />
                &nbsp;Nodejs
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
