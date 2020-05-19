import React from 'react';
import { render } from 'react-dom';

import Router from 'src/components/Router';

import 'src/index.css';

render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,

  document.querySelector('[data-id="root"]'),
);
