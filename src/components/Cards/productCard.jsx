import React from "react";
import {
  Card,
  Grid,
  Image,
  Icon,
  Button,
  Modal,
  Header
} from "semantic-ui-react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const truncateDescriptionString = (string, num) => {
  if (string.length <= num) {
    return string;
  }
  return string.slice(0, num) + "...";
};

const ProductCard = ({
  productName,
  productPrice,
  productDescription,
  productImage
}) => (
  <Card className={style.card}>
    <Image
      src={productImage}
      wrapped
      ui={false}
      className={style.images}
      fluid
    />
    <Card.Content>
      <Card.Header>
        {truncateDescriptionString(`${productName}`, 40)}
      </Card.Header>
      <Card.Meta></Card.Meta>
      <Card.Description>
        {truncateDescriptionString(`${productDescription}`, 35)}
        <p className={style.price}>₦ {productPrice}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Modal
        trigger={
          <Button
            icon
            labelPosition="left"
            style={{ backgroundColor: "#F81D02", color: "#FFFFFF" }}
          >
            <Icon name="cart" />
            Buy
          </Button>
        }
        basic
        size="small"
      >
        <Header icon="cart" content="Product options" />
        <Modal.Content>
          <p>Add to Cart, or View Extra product details</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted>
            <Icon name="cart" /> Add To Cart
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Product Details
          </Button>
        </Modal.Actions>
      </Modal>
    </Card.Content>
  </Card>
);

export default ProductCard;
