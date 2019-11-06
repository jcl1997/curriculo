import React, { Component } from 'react';

export default class Follow extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header card-header-text bg-danger">
          <div className="card-text">
          <h3 className="card-title text-white">Siga-Me</h3>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">
                <i className="fab fa-instagram" />
                &nbsp;instagram/juliocl1997
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fab fa-linkedin" />
                &nbsp;linkedin/julioCesarLima1997
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <i className="fab fa-github" />
                &nbsp;jcl1997
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
