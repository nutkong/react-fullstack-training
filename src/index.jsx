import { render } from 'react-dom';
import React from 'react';

import HelloComponent from './hellocomponent.jsx';

render(
  <HelloComponent name="nutkong" />,
  document.getElementById('root')
);
