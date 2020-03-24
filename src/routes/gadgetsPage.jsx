import React from "react";
import { Container, Card, Icon, Image, Grid } from "semantic-ui-react";
import ProductCard from "../components/Cards/productCard";
import style from "./css/gadgetsPage.module.css";
import { Link } from "react-router-dom";

const GadgetsPage = () => {
  return (
    <div>
      <Container>
        <Grid className={style.tagsGrid}>
          <Grid.Row>
            <Grid.Column className={style.tags} width={3}>
              <Card>
                <Card.Content>
                  <Image
                    src="https://image.businessinsider.com/5ce41f3d021b4c09fc046ab4?width=1100&format=jpeg&auto=webp"
                    avatar
                  />
                  VR
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={style.tags} width={3}>
              <Card>
                <Card.Content>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdgL_a1Uyw9jC-4gdroZx9x7gNumZ92o4DIiJgjlSxYsFa-gz&s"
                    avatar
                  />
                  Sports
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={style.tags} width={3}>
              <Card>
                <Card.Content>
                  <Image
                    src="https://www.paykobo.com/media/product/1a6/2018-lenovo-thinkcentre-m91p-sff-small-form-factor-desktop-computer-intel-quad-core-i5-2400s-cpu-up-to-3-3ghz-8gb-ddr3-ram-500gb-hdd-dvd-windows-7-professional-certified-refurbished-deo5040y77r2-68f.jpg"
                    avatar
                  />
                  CPU
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={style.tags} width={3}>
              <Card>
                <Card.Content>
                  <Image
                    src="https://cdn.thewirecutter.com/wp-content/uploads/2018/07/laser-printers-lowres-9031-570x380.jpg"
                    avatar
                  />
                  Printer
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={style.tags} width={3}>
              <Card>
                <Card.Content>
                  <Image
                    src="https://www.wasdkeyboards.com/media/catalog/product/cache/image/2500x700/e9c3970ab036de70892d86c6d221abfe/2/0/20191028_155549.jpg"
                    avatar
                  />
                  Keyboard
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* HERE MARKS THE BEGINNING OF THE PRODUCT CARDS */}
        <Grid className={style.productGrid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Link to="/details/name">
                <ProductCard
                  productName="27es 27 Ips Led Backlight Display Monitor"
                  productImage="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/H/145011_1550056691.jpg"
                  productPrice="130,000"
                  productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
              <Link to="/details/name">
                <ProductCard
                  productName="Black mesh top24 Inch Gaming Monitor LED Computer Monitors 4K Desktop LCD"
                  productImage="https://image.made-in-china.com/202f0j00HDUYdFkhClbP/24-Inch-Gaming-Monitor-LED-Computer-Monitors-4K-Desktop-LCD.jpg"
                  productPrice="3400"
                  productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
              <Link to="/details/name">
                <ProductCard
                  productName="MacBook Pro 2018 13 inch"
                  productImage="https://image.businessinsider.com/5ce41f3d021b4c09fc046ab4?width=1100&format=jpeg&auto=webp"
                  productPrice="2500"
                  productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
                />
              </Link>
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Intel Gaming Solid Laptop"
                productImage="https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/hfb/hb5/9283093004318/razer-blade-studio-edition-768x500-hero-mobile.jpg"
                productPrice="3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Canon MG3050 All in One Wireless Inkjet Printer"
                productImage="https://assets.ryman-static.co.uk/media/catalog/product/cache/2/image/900x/9df78eab33525d08d6e5fb8d27136e95/3/9/3904016015_3.jpg"
                productPrice="3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Computer Cables"
                productImage="http://voltron.co.tz/sites/default/files/cables-connectors-1173522.jpg"
                productPrice="2500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Marvel studio shirt"
                productImage="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057110445-1"
                productPrice="2500"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <ProductCard
                productName="Pakistini AllstarsComputer Mouse Personality Fashion USB"
                productImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZJK6xcEqf1jwYmhaG-7dT8njT2YtAymCrnHG7j_-Q_mrU39i&s"
                productPrice="3400"
                productDescription="A modal displays content that temporarily blocks interactions with the main view of a site."
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default GadgetsPage;
