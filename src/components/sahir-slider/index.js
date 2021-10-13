import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageGallaryComponent({ imgData }) {
  return (
    <Carousel dynamicHeight={true} showArrows={false} transitionTime="500">
      {imgData &&
        imgData.map((img) => (
          <div key={img} >
            <img
              style={{ objectFit: 'cover', aspectRatio: '1.5' }}
              alt=""
              src={img}

            />
          </div>
        ))}
    </Carousel>


  );
}
