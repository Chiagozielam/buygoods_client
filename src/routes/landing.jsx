import React from "react";
import { Container, Grid, Image, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import TopCarousel from "../components/LandingPage/carousel";
import style from "./css/landing.module.css";
import SpecialOffers from "../components/LandingPage/specialOffers";
import TrendingBlock from "../components/LandingPage/trending";
import Announcement from "../components/LandingPage/Announcements";
import CategoryBlock from "../components/LandingPage/categoryBlock";

const Landing = () => {
  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Grid>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Link className={style.link} to="categories/fasion">
                    <p>
                      <span>
                        <Icon name="cubes" />
                      </span>{" "}
                      Fasion
                    </p>
                  </Link>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Link className={style.link} to="/categories/computers">
                    <p>
                      <span>
                        <Icon name="tv" />
                      </span>{" "}
                      Computers
                    </p>
                  </Link>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Link className={style.link} to="categories/gadgets">
                    <p>
                      <span>
                        <Icon name="video camera" />
                      </span>{" "}
                      Gadgets
                    </p>
                  </Link>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Link className={style.link} to="categories/smartphones">
                    <p>
                      <span>
                      <Icon name="connectdevelop" />
                      </span>{" "}
                      SmartPhones
                    </p>
                  </Link>
                </Card.Content>
              </Card>
              
            </Grid.Column>
            <Grid.Column width={9}>
              <TopCarousel />
            </Grid.Column>
            <Grid.Column>
              <Card
                className={style.topCard}
                style={{ backgroundColor: "#15202B" }}
              >
                <Card.Content>
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Card.Content>
              </Card>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <SpecialOffers />
        <TrendingBlock />
        <Announcement />
        <CategoryBlock />
      </Container>
    </div>
  );
};

export default Landing;
