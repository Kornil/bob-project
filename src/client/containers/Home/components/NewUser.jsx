import React, { Component } from 'react';

class NewUser extends Component {
  sendData = async (e) => {
    const name = e.target.elements.name.value;
    const bags = e.target.elements.bags.value;
    e.preventDefault();
    await fetch(`/new?name=${name}&bags=${bags}`, {
      method: 'POST',
    });
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

export default NewUser;
