import React from "react";
import { Container, Grid, Image, Card, Icon } from "semantic-ui-react";
import Details from "../components/DetailsPage/Details";
import PolicyCard from "../components/DetailsPage/PolicyCard"

const ProductDetails = () => {
  return (
    <div style={{ marginTop: "3%" }}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Details />
            </Grid.Column>
            <Grid.Column width={4}>
                <PolicyCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;
