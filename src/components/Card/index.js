import React from "react";
import { Title, Picture, Card, Container, Img } from "./style";
import { Link } from "react-router-dom";
function CarD(props) {
  return (
    <Link to={"/detail"} onClick={props.onClick}>
      <Card>
        <Picture>
          <Img src={props.image} />
        </Picture>
        <Title>{props.name}</Title>
      </Card>
    </Link>
  );
}

export default CarD;
