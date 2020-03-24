import React from "react";
import { Grid, Image, Card, Divider, Button } from "semantic-ui-react";
import style from "./Details.module.css";
import OtherDetails from "./OtherDetails";

const productDetails = () => {
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Image src="https://ae01.alicdn.com/kf/HTB1HSleaOYrK1Rjy0Fdq6ACvVXa7/summer-dress-women-elegant-Short-Sleeve-Cross-Dresses-Vintage-Elegant-Flared-A-Line-blue-dresses-party.jpg" />
              </Grid.Column>
              <Grid.Column width={8}>
                <article>
                  <h1> Women's Spotted Dress</h1>
                  <Divider />
                  <p className={style.price}>₦ 3,600</p>
                  <p className={style.formerPrice}>₦ 8,000</p>
                  <Button className={style.button}>S</Button>
                  <Button className={style.button}>M</Button>
                  <Button className={style.button}>L</Button>
                  <Button className={style.button}>XL</Button>
                  <Button className={style.button}>XXL</Button>

                  <section>
                    <Button className={style.cartButton}>ADD TO CART</Button>
                  </section>
                </article>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
      <OtherDetails />
    </div>
  );
};

export default productDetails;
