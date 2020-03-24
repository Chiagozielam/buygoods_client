import React from "react";
import { Container, Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import style from "./css/fasionPage.module.css";
import ProductCard from "../components/Cards/productCard";

const FasionPage = () => {
  return (
    <div>
      <Container>
        <Grid className={style.categoryGrid}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Card className={style.card}>
                <Image src="https://res.cloudinary.com/dcft8yhab/image/upload/v1577962405/DSC_5404.jpg" />
                <div className={style.category}>
                  <Link className={style.link} to="categories/gadgets">
                    <p>Boys</p>
                  </Link>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card className={style.card}>
                <Image src="https://res.cloudinary.com/dcft8yhab/image/upload/v1578698275/unisex_photo.jpg" />
                <div className={style.category}>
                  <Link className={style.link} to="categories/gadgets">
                    <p>Unisex</p>
                  </Link>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card className={style.card}>
                <Image src="https://res.cloudinary.com/dcft8yhab/image/upload/v1578692448/DSC_5416.jpg" />
                <div className={style.category}>
                  <Link className={style.link} to="categories/gadgets">
                    <p>Girls</p>
                  </Link>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* HERE MARKS THE BEGINNING OF THE PRODUCT CARDS */}
        <Grid className={style.productGrid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProductCard
                productName="Balenciaga"
                productImage="https://intheircloset.com/wp-content/uploads/2017/12/sam-edelman-tara-sock-sneakers-black-white-balencia-speed-trainer-dupes.jpg"
                productPrice= "4500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Black mesh top"
                productImage="https://d2h1pu99sxkfvn.cloudfront.net/b0/6102803/381079717_W9Ve7jg0dE/P6.jpg"
                productPrice= "3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Marvel studio shirt"
                productImage="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057110445-1"
                productPrice= "2500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Pakistini Allstars"
                productImage="https://www.fashioncentral.pk/wp-content/uploads/2017/02/Beauty_Style/canvas_shoes_for_women-1.jpg"
                productPrice= "3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Black mesh top"
                productImage="https://d2h1pu99sxkfvn.cloudfront.net/b0/6102803/381079717_W9Ve7jg0dE/P6.jpg"
                productPrice= "3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Marvel studio shirt"
                productImage="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057110445-1"
                productPrice= "2500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Marvel studio shirt"
                productImage="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057110445-1"
                productPrice= "2500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Pakistini Allstars"
                productImage="https://www.fashioncentral.pk/wp-content/uploads/2017/02/Beauty_Style/canvas_shoes_for_women-1.jpg"
                productPrice= "3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default FasionPage;
