import React from 'react';

import Routes from './Routes';

import { StyledBody } from './styled-components';

const App = () => (
  <StyledBody>
    <div>
      <h1>hello world!</h1>
      <p>If you see this everything is working!</p>
      <Routes />
    </div>
  </StyledBody>
);

export default App;
