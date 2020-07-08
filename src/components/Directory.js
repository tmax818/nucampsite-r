import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem(props) {
  console.log(props);
  return (
    <Card onClick={() => props.onClick(props.campsite.id)}>
      <CardImg
        width="100%"
        src={props.campsite.image}
        alt={props.campsite.name}
      />
      <CardImgOverlay>
        <CardTitle>{props.campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function Directory(props) {
  console.log(props);
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-5 m-1">
        <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
