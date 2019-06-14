import React, { Component } from 'react';

export default class Follow extends Component {
  render() {
    //  style="width: 20rem;"
    return (
      <div className="card">
        <div className="card-header card-header-text bg-primary">
          <div className="card-text">
            <h4 className="card-title text-white">Sobre mim</h4>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
          Atualmente sou um desenvolvedor Web.
          <br />
          Trabalho com php e javascript.
          </p>
        </div>
      </div>
    );
  }
}
