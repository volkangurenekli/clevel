import React from "react";
import { Title, Picture, Card, Img } from "./style";
import { Link } from "react-router-dom";
function XCard(props) {
  return (
    <Link to={"/detail"}>
      <Card {...props}>
        <Picture>
          {props.image ? <Img src={props.image.medium} /> : null}
        </Picture>
        <Title>{props.name}</Title>
      </Card>
    </Link>
  );
}

export default XCard;
