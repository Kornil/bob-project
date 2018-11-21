import React, { Component } from 'react';

import { NewUser, Card } from './components';

class Home extends Component {
  state = {
    users: [],
    status: '',
  };

  async componentDidMount() {
    await this.fetchData();
  }

  // prevent async data leaking
  componentWillUnmount() {
    this.setState = () => undefined;
  }

  fetchData = async () => {
    try {
      const response = await fetch('/get_data');
      const { users } = await response.json();
      this.setState({
        users,
        status: 'success',
      });
    } catch (err) {
      this.setState({
        status: 'error',
      });
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Home Page</h2>
        <NewUser fetchData={this.fetchData} />
        {users.map(user => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    );
  }
}

export default Home;
