import React, { Component } from "react";

import { NewUser } from "./components"

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
    <p>The counter value is {counterValue}</p>
    <button onClick={handleIncreaseValue}>Add</button>
    <button onClick={handleDecreaseValue}>Remove</button>
      </div>
    );
  }
}

export default Home;
