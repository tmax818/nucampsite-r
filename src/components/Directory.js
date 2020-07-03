import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

import CampsiteInfo from "./CampsiteInfo";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }

  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  render() {
    //console.log("Directory State:", this.state.selectedCampsite);
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <CampsiteInfo campsite={this.state.selectedCampsite} />
      </div>
    );
  }
}

export default Directory;
