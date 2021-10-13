import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components/macro";
export default function Slider({ children }) {
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
    <SliderHolder>
      <Carousel draggable={false} arrows={true} responsive={responsive}>
        {children}
      </Carousel>
    </SliderHolder>
  );
}

const SliderHolder = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  align-self: center;
  /* margin: 10px; */
`;
