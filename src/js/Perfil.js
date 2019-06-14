import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-white">Perfil</h1>
        </div>
        <div className="pt-5 card-body">
          <ul className="list-group list-group-flush">
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-php fa-2x align-middle" />&nbsp;PHP 7.2</p></il>
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-symfony fa-2x align-middle" />&nbsp;Symfony PHP 3.4</p></il>
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-react fa-2x align-middle" />&nbsp;React</p></il>
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-git-alt fa-2x align-middle" />&nbsp;Git</p></il>
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-node-js fa-2x align-middle" />&nbsp;Node JS</p></il>
            <il className="list-group-item"><p className="mb-0 align-middle"><i className="fab fa-bootstrap fa-2x align-middle" />&nbsp;Bootstrap</p></il>
          </ul>
        </div>
      </div>
    );
  }
}
