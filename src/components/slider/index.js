import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <button onClick={() => onClick()}></button>;
  };
  return (
    <div
      style={{
        width: "100%",
        height: " 90%",
      }}
    >
      <Carousel customRightArrow={CustomRightArrow} responsive={responsive}>
        {children}
      </Carousel>
    </div>
  );
}
