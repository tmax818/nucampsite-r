import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { CAMPSITES } from "./shared/campsites";
import "./App.css";

import Directory from "./components/Directory";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { campsites: CAMPSITES };
  }
  render() {
    //  console.log(CAMPSITES);
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default App;
