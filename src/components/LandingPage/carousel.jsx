import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Button, Image } from "semantic-ui-react";
import styles from "./carousel.module.css"

const TopCarousel = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image src="https://media.istockphoto.com/photos/shopping-girl-is-texting-in-the-mall-picture-id644080598?k=6&m=644080598&s=612x612&w=0&h=F2nlD4cG1_TFobFerRPkjss1z6lYIeQbF04tQ8V3Qis=" />
        );
      }
    },
    {
      render: () => {
        return (
          <Image src="https://cannacommunication.com/wp-content/uploads/2019/01/take-more-photos-612x408.jpg" />
        );
      }
    },
    {
        render: () => {
          return (
            <Image src="https://wwwcache.wral.com/asset/lifestyles/travel/2018/11/07/17977697/5063-maps-DMID1-5gq5e0wrh-612x408.jpg" />
          );
        }
      }
  ];
  return (
    <div>
      <Carousel
        elements={elements}
        duration={4000}
        animation="fade"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
};
export default TopCarousel;
