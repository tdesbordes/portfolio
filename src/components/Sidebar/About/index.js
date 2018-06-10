import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          <hr />
          A technology enthusiast &amp; eSport aficionado, who loves binge
          watching series, mangas and Star Wars !
          <hr />
          Interested in Blockchain technology, IA, Space and more ...
          <hr />
        </div>
      </div>
    );
  }
}

export default About;
