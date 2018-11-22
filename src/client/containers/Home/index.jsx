import React, { Component, Fragment } from 'react';

import { CardsContainer, NewUserForm } from './components';

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
  };

  render() {
    const { users, status } = this.state;
    return (
      <Fragment>
        <NewUserForm fetchData={this.fetchData} />
        <CardsContainer users={users} status={status} />
      </Fragment>
    );
  }
}

export default Home;
