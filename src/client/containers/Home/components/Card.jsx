import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ user }) => (
  <div>
    <h3>{user.Name}</h3>
    <p>{user.Bags}</p>
  </div>
);

Card.propTypes = {
  user: PropTypes.shape({
    Name: PropTypes.string,
    Bags: PropTypes.number,
  }).isRequired,
};

export default Card;
