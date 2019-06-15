import React from 'react';
import ReactDOM from 'react-dom';
import User from './js/User';
import Curriculum from './js/Curriculum';

ReactDOM.render(
  <div className="container-fluid px-lg-5">
    <div className="row mx-lg-n5">
      <div className="col-sm-4" >
        <User />
      </div>
      <div className="col" >
        <Curriculum />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
