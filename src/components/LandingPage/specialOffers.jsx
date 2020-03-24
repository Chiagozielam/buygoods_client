import React from "react";
import { Card, Grid, Image, Icon, Button } from "semantic-ui-react";
import style from "./specialOffers.module.css";
import { Link } from "react-router-dom";

const TrendingBlock = () => (
  <div style={{ marginTop: "3%", marginBottom: "5%" }}>
    <Card fluid className={style.card}>
      <Card.Content className={style.cardHeader}>
        <Card.Header style={{ color: "white" }}>
          {" "}
          Today Special Offers
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column>
              <Link to="details/name">
                <Card className={style.innerCards}>
                  <Image
                    src="https://media.gettyimages.com/photos/closeup-of-laptop-against-white-background-picture-id1083707504?s=612x612"
                    wrapped
                    ui={false}
                    className={style.images}
                  />
                  <Card.Content>
                    <Card.Header>MacBook Pro 15' </Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>
                      Matthew is a musician...
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <p className={style.discountPrice}>₦800</p>
                    <p className={style.formerPrice}>₦1,000</p>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>

            <Grid.Column>
              <Card className={style.innerCards}>
                <Image
                  src="https://zdnet1.cbsistatic.com/hub/i/r/2019/04/17/1f68c3a6-495e-4325-bc16-cc531812f0ec/thumbnail/770x433/84ff4194826e8303efb771cd377a854f/chuwi-herobook-header.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Chuwi HeroBook</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>Matthew is a musician...</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p className={style.discountPrice}>₦54,000</p>
                  <p className={style.formerPrice}>₦70,000</p>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card className={style.innerCards}>
                <Image
                  src="https://ae01.alicdn.com/kf/HTB1HSleaOYrK1Rjy0Fdq6ACvVXa7/summer-dress-women-elegant-Short-Sleeve-Cross-Dresses-Vintage-Elegant-Flared-A-Line-blue-dresses-party.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Ladies Gown</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>Matthew is a musician...</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p className={style.discountPrice}>₦3,400</p>
                  <p className={style.formerPrice}>₦5,000</p>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card className={style.innerCards}>
                <Image
                  src="http://www.gordonlittle.ca/images/trainer/balenciaga%20mens%20shoes-767zyc.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Balenciaga</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>Matthew is a musician...</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p className={style.discountPrice}>₦3,000</p>
                  <p className={style.formerPrice}>₦5,900</p>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card className={style.innerCards}>
                <Image
                  src="https://staticimg.titan.co.in/Tanishq/Catalog/513013HVMAAA00_2.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Gold Hoop Earrings</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>Matthew is a musician...</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <p className={style.discountPrice}>₦800</p>
                  <p className={style.formerPrice}>₦1,200</p>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </div>
);

export default TrendingBlock;
