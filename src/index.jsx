import { render } from 'react-dom';
import React from 'react';

import HelloComponent from './hellocomponent.jsx';
import UserInfoComponenet from './fetchingUser.jsx';

render(
  <div>
    <HelloComponent name="nutkong" />
    <UserInfoComponenet />
  </div>
  ,
  document.getElementById('root')
);
