import React from "react";
import { Grid, Image, Card, Divider, Button } from "semantic-ui-react";
import style from "./PolicyCard.module.css";

const OtherDetails = () => {
  return (
    <Card fluid>
      <Card.Content>
        <h4>DELIVERY POLICY</h4>
        <Divider />
        <p className={style.text}>
          How to split a single bundle into multiple is a well solved problem
          with tools like Browserify and Webpack. But now you need to find
          places in your application..
        </p>
        <Divider />
        <p className={style.text}>
          How to split a single bundle into multiple is a well solved problem
          with tools like Browserify and Webpack. But now you need to find
          places in your application..
        </p>
        <Divider />
        <p className={style.text}>
          How to split a single bundle into multiple is a well solved problem
          with tools like Browserify and Webpack. But now you need to find
          places in your application..
        </p>
      </Card.Content>
    </Card>
  );
};

export default OtherDetails;
