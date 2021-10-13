import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageGallaryComponent({ imgData }) {
  return (
      <Carousel transitionTime="500">
        {imgData &&
          imgData.map((img) => (
            <div key={img} style={{ width: "100%" }}>
              <img
                alt=""
                src={img}
                style={{ width: "100%", objectFit: "contain", height: "100%" }}
              />
            </div>
          ))}
      </Carousel>
  );
}
