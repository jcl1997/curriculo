import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './js/Contact';

ReactDOM.render(
  <div className="container-fluid">
    <div className="row">
      <Contact className="col-3" />
      <div className="col-9">Curriculo</div>
    </div>
  </div>,
  document.getElementById('root')
);
