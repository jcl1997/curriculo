import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    //  style="width: 20rem;"
    return (
      <div className="card">
        <div className="card-header card-header-text bg-success">
          <div className="card-text">
          <h4 className="card-title text-white">Contatos</h4>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-envelope-open-text" />
                &nbsp;juliocesarlima19@gmail.com
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-phone-alt" />
                &nbsp;3322-9846
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fas fa-mobile-alt" />
                &nbsp;+55 (31)99803-5980
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
