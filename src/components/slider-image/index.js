import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SmallImage } from "../index";
export default function SliderImage({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      // customRightArrow={RightButton}
      customDot={SmallImage}
      responsive={responsive}
      draggable={true}
      showDots={true}
    >
      {children}
    </Carousel>
  );
}
