import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import { Card } from '.';

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8%;
`;

const CardsContainer = ({ users, status }) => {
  switch (status) {
    case 'success':
      return (
        <StyledCardsContainer>
          {users.map(user => (
            <Card key={user._id} user={user} />
          ))}
        </StyledCardsContainer>
      );
    case 'error':
      return <p>There was an error loading users, please refresh the page.</p>;
    default:
      return <p>Loading...</p>;
  }
};

CardsContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      Name: PropTypes.string,
      Bags: PropTypes.number,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};

export default CardsContainer;
