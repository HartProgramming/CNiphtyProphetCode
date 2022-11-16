import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const HomeButtonCard = (props) => {
  const [state, setState] = useState(true);
  const [icons, setIcons] = useState(true);

  return (
    <Card className={props.cardClass}>
      <h2 className={props.h2Class}>{props.h2}</h2>
      <Link to={state && props.path} path={props.path}>
        <Button title={props.title} style={props.buttonPage}></Button>
      </Link>
      {props.icons}
      <Button
        onClick={props.onClick}
        title={props.detailsTitle}
        style={props.detailsClass}
      />
    </Card>
  );
};

export default HomeButtonCard;
