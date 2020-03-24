import React from "react";
import { Grid, Image, Card, Divider, Button } from "semantic-ui-react";
import style from "./OtherDetails.module.css";

const OtherDetails = () => {
  return (
    <Card fluid>
      <Card.Content>
        <h2>OTHER DETAILS</h2>
        <p className={style.text}>
          How to split a single bundle into multiple is a well solved problem
          with tools like Browserify and Webpack. But now you need to find
          places in your application where you can decide to split off into
          another bundle and load it asynchronously. You also need a way to
          communicate in your app when something is loading.
        </p>
      </Card.Content>
    </Card>
  );
};

export default OtherDetails;
