import React from "react";
import { Card, Grid, Image, Icon, Button } from "semantic-ui-react";
import style from "./categoryBlock.module.css";
import { Link } from "react-router-dom";

const CategoryBlock = () => (
  <div style={{ marginTop: "10%", marginBottom: "5%" }}>
    <Card fluid>
      <Card.Content>
        <Card.Header>Categories</Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={7}>
              <Link className={style.linkContainer} to="/categories/clothing">
                <Card fluid className={style.card}>
                  <Image
                    src="https://www.photocase.com/photos/148818-summer-vacation-and-travel-colour-multicoloured-clothing-photocase-stock-photo-large.jpeg"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header className={style.cardText}>
                      CLOTHING
                    </Card.Header>
                    <Card.Meta></Card.Meta>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>

            <Grid.Column>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Link to="/categories/computers" className={style.linkContainer}>
                      <Card fluid className={style.card}>
                        <Image
                          src="https://mpissl.co.ke/wp-content/uploads/2017/02/computers.jpg"
                          wrapped
                          ui={false}
                          className={style.images}
                        />
                        <Card.Content>
                          <Card.Header className={style.cardText}>
                            COMPUTERS & ACCESSORIES
                          </Card.Header>
                          <Card.Meta></Card.Meta>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link to="/categories/gadgets" className={style.linkContainer}>
                      <Card fluid className={style.card}>
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VKjMCCXYBSntX_Aqg6VIqCM7_-016IWOVyIN-qeldSnFPrg4&s"
                          wrapped
                          ui={false}
                          className={style.images}
                        />
                        <Card.Content>
                          <Card.Header className={style.cardText}>
                            GADGETS
                          </Card.Header>
                          <Card.Meta></Card.Meta>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Link to="/categories/smartphones" className={style.linkContainer}>
                      <Card fluid className={style.card}>
                        <Image
                          src="https://cnet2.cbsistatic.com/img/zUPPHHRkpU6kQTwKt1LNpHAMmSE=/2018/09/19/e708c963-ff8d-49ab-bc7f-2b122788e915/08-htc-t-mobile-g1-10-years-later.jpg"
                          wrapped
                          ui={false}
                          className={style.images}
                        />
                        <Card.Content>
                          <Card.Header className={style.cardText}>
                            SMARTPHONES
                          </Card.Header>
                          <Card.Meta></Card.Meta>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Link to="/categories/accessories" className={style.linkContainer}>
                      <Card fluid className={style.card}>
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jY7TyHu0dNg2zEOUnHOyzestCv4-5Kj6U4hu8Lh63w_-_dLf&s"
                          wrapped
                          ui={false}
                          className={style.images}
                        />
                        <Card.Content>
                          <Card.Header className={style.cardText}>
                            ACCESSORIES
                          </Card.Header>
                          <Card.Meta></Card.Meta>
                        </Card.Content>
                      </Card>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </div>
);

export default CategoryBlock;
