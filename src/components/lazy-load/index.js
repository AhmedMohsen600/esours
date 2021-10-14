import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MyImage = ({ src }) => (
  <div>
    <LazyLoadImage
      effect="blur"
      alt="product"
      src={src} // use normal <img> attributes as props
      width="100%"
    />
  </div>
);

export default MyImage;
