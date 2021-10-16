import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components/macro";
import { SmallImage } from "../index";
import { CustomRightArrow, CustomLeftArrow } from "../index";
export default function Slider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
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
    <SliderHolder>
      <Carousel
        showDots={false}
        draggable={false}
        arrows={true}
        responsive={responsive}
        keyBoardControl={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {children}
      </Carousel>
    </SliderHolder>
  );
}

const SliderHolder = styled.div`
  width: 100%;
  max-height: 100%;
`;
