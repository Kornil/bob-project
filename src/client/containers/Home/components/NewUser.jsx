import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUser extends Component {
  sendData = async (e) => {
    const name = e.target.elements.name.value;
    const bags = e.target.elements.bags.value;
    e.preventDefault();
    try {
      await fetch(`/new?name=${name}&bags=${bags}`, {
        method: 'POST',
      });
    } finally {
      this.props.fetchData();
    }
  };

  render() {
    return (
      <form onSubmit={this.sendData}>
        <input name="name" type="text" />
        <input name="bags" type="number" min={1} max={5} />
        <input type="submit" />
      </form>
    );
  }
}

NewUser.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default NewUser;
