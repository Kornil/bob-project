import React, { Component } from 'react';

import { NewUser, Card } from './components';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <NewUser />
      </div>
    );
  }
}

export default Home;
