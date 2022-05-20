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
            Atuar como programador Full Stack com PHP e Javascript. Sou muito
            focado em atingir os objetivos da empresa na área de tecnologia
            digital, sempre com boas práticas de segurança e qualidade de
            codificação, trabalhando sozinho ou em equipe.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-php fa-2x align-middle" />
                &nbsp;PHP&nbsp;
                <i className="fab fa-js fa-2x align-middle" />
                &nbsp;Javascript
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-symfony fa-2x align-middle" />
                &nbsp;Symfony PHP &nbsp;
                <i className="fab fa-php fa-2x align-middle" />
                &nbsp;CakePHP
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-react fa-2x align-middle" />
                &nbsp;React e React Native&nbsp;
                <i className="fab fa-android fa-2x align-middle" />
                &nbsp;Mobile
              </p>
            </li>
            <li className="list-group-item">
              <p className="mb-0 align-middle">
                <i className="fab fa-git-alt fa-2x align-middle" />
                &nbsp;Git&nbsp;
                <i className="fab fa-docker fa-2x align-middle" />
                &nbsp;Container&nbsp;
                <i className="fas fa-database fa-2x align-middle" />
                &nbsp;MySql e Mongo para Mobile
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
