import React, { Component } from "react";
import Signup from "../Signup/Signup";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <h1 className="albums-heading">Welcome to Music Albums</h1>
            <Signup />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
