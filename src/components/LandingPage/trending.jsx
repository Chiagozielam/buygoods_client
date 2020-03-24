import React from "react";
import { Card, Grid, Image, Icon, Button } from "semantic-ui-react";
import style from "./trending.module.css"
import { Link } from 'react-router-dom'

const TrendingBlock = () => (
  <div style={{ marginTop: "3%", marginBottom: "5%" }}>
    <Card fluid>
      <Card.Content>
        <Card.Header className={style.trendingHeader}>Trending</Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column>
              <Card>
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
                    <p className={style.price}>₦800</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button icon labelPosition="left" style={{backgroundColor: "#F81D02", color: "#FFFFFF"}}>
                    <Icon name="cart" />
                    Buy
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image
                  src="https://zdnet1.cbsistatic.com/hub/i/r/2019/04/17/1f68c3a6-495e-4325-bc16-cc531812f0ec/thumbnail/770x433/84ff4194826e8303efb771cd377a854f/chuwi-herobook-header.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Chuwi HeroBook</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    Matthew is a musician...
                    <p className={style.price}>₦800</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button icon labelPosition="left" style={{backgroundColor: "#F81D02", color: "#FFFFFF"}}>
                    <Icon name="cart" />
                    Buy
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image
                  src="https://ae01.alicdn.com/kf/HTB1HSleaOYrK1Rjy0Fdq6ACvVXa7/summer-dress-women-elegant-Short-Sleeve-Cross-Dresses-Vintage-Elegant-Flared-A-Line-blue-dresses-party.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Ladies Gown</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    Matthew is a musician...
                    <p className={style.price}>₦800</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button icon labelPosition="left" style={{backgroundColor: "#F81D02", color: "#FFFFFF"}}>
                    <Icon name="cart" />
                    Buy
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image
                  src="http://www.gordonlittle.ca/images/trainer/balenciaga%20mens%20shoes-767zyc.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Balenciaga</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    Matthew is a musician...
                    <p className={style.price}>₦800</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button icon labelPosition="left" style={{backgroundColor: "#F81D02", color: "#FFFFFF"}}>
                    <Icon name="cart" />
                    Buy
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Image
                  src="https://staticimg.titan.co.in/Tanishq/Catalog/513013HVMAAA00_2.jpg"
                  wrapped
                  ui={false}
                  className={style.images}
                />
                <Card.Content>
                  <Card.Header>Gold Hoop Earrings</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>
                    Matthew is a musician...
                    <p className={style.price}>₦800</p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button icon labelPosition="left" style={{backgroundColor: "#F81D02", color: "#FFFFFF"}}>
                    <Icon name="cart" />
                    Buy
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>

      <Link className={style.bottomLink} to="details/name"><p>See More <Icon name="arrow right" /></p></Link>
    </Card>
  </div>
);

export default TrendingBlock;
