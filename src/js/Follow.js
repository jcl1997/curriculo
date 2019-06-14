import React, { Component } from 'react';

export default class Follow extends Component {
  render() {
    //  style="width: 20rem;"
    return (
      <div className="card">
        <div className="card-header card-header-text bg-danger">
          <div className="card-text">
          <h4 className="card-title text-white">Siga-Me</h4>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            <i className="fab fa-instagram" />
            &nbsp;instagram/juliocl1997
          </p>
          <p className="card-text">
            <i className="fab fa-linkedin" />
            &nbsp;linkedin/julioCesarLima1997
          </p>
        </div>
      </div>
    );
  }
}
