import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledCard = styled.div`
  border: 1px black solid;
  padding: 16px;
`;

const Card = ({ user }) => (
  <StyledCard>
    <h3>{`Name: ${user.Name}`}</h3>
    <p>{`Bags: ${user.Bags}`}</p>
  </StyledCard>
);

Card.propTypes = {
  user: PropTypes.shape({
    Name: PropTypes.string,
    Bags: PropTypes.number,
  }).isRequired,
};

export default Card;
