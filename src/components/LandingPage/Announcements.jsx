import React from "react";
import { Container, Grid, Image, Card } from "semantic-ui-react";
import style from "./Announcements.module.css"

const Announcement = () => {
  return (
    <div>
      <h3>Announcements</h3>
      <div style={{ padding: "0 5%" }}>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Card style={{ backgroundColor: "#15202B" }}>
                <Card.Content>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    className={style.images}
                    circular
                  />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Card.Content>
              </Card>{" "}
            </Grid.Column>
            <Grid.Column>
              <Card style={{ backgroundColor: "#15202B" }}>
                <Card.Content>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    className={style.images}
                    circular
                  />

                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Card.Content>
              </Card>{" "}
            </Grid.Column>
            <Grid.Column>
              <Card style={{ backgroundColor: "#15202B" }}>
                <Card.Content>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    className={style.images}
                    circular
                  />

                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Card.Content>
              </Card>{" "}
            </Grid.Column>
            <Grid.Column>
              <Card style={{ backgroundColor: "#15202B" }}>
                <Card.Content>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    className={style.images}
                    circular
                  />

                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Card.Content>
              </Card>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Announcement;
