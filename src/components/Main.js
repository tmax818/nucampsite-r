import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { CAMPSITES } from "../shared/campsites";

import Header from "./Header";
import Footer from "./Footer";
import CampsiteInfo from "./CampsiteInfo";
import Directory from "./Directory";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
  }

  render() {
    return (
      <div>
        <Header />
        <Directory
          campsites={this.state.campsites}
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
