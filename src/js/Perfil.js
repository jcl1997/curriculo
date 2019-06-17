import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-white">Perfil</h3>
        </div>
        <div className="pt-5 card-body">
          <p>
          Atualmente sou desenvolvedor web, backend em php e frontend em react. Tenho facilidade em trabalhar em equipe, sou pontual.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-php fa-2x align-middle" />&nbsp;PHP 7.2
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-symfony fa-2x align-middle" />&nbsp;Symfony PHP 3.4
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-react fa-2x align-middle" />&nbsp;React
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-git-alt fa-2x align-middle" />&nbsp;Git
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
