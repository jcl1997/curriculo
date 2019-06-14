import React from 'react';
import ReactDOM from 'react-dom';
import User from './js/User';
import Curriculum from './js/Curriculum';

ReactDOM.render(
  <div className="container-fluid">
    <div className="row">
      <User className="col-4" />
      <div className="col-8">
        <Curriculum />
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
