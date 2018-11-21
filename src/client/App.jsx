import React from 'react';
import { Link } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <main className="container">
    <div>
      <h1>hello world!</h1>
      <p>If you see this everything is working!</p>
    </div>
    <ul className="left">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <Routes />
  </main>
);

export default App;
