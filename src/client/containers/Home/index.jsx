import React, { Component } from 'react';
import styled from 'react-emotion';

import { NewUser, Card } from './components';

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8%;
`;

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
    const { users } = this.state;
    return (
      <div>
        <NewUser fetchData={this.fetchData} />
        <StyledCardsContainer>
          {users.map(user => (
            <Card key={user._id} user={user} />
          ))}
        </StyledCardsContainer>
      </div>
    );
  }
}

export default Home;
