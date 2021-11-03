import React from "react";
import {
  Container,
  Inner,
  Info,
  SliderContainer,
  Title,
  Description,
  Image,
  ImagesHolder,
  LockBody,
  Close,
} from "./styles/cleint";

export default function ClientModal({ children, ...restProps }) {
  return (
    <Container className="shadow" {...restProps}>
      {children}
    </Container>
  );
}

ClientModal.Inner = function ClientInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ClientModal.Info = function ClientInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

ClientModal.SliderContainer = function ClientSliderContainer({
  children,
  ...restProps
}) {
  return <SliderContainer {...restProps}>{children}</SliderContainer>;
};

ClientModal.Title = function ClientTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ClientModal.Description = function ClientDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

ClientModal.Image = function ClientTitleImage({ ...restProps }) {
  return <Image {...restProps} />;
};

ClientModal.ImagesHolder = function ClientImagesHolder({
  children,
  ...restProps
}) {
  return <ImagesHolder {...restProps}>{children}</ImagesHolder>;
};

ClientModal.LockBody = function ClientTitleLockBody({ ...restProps }) {
  return <LockBody {...restProps} />;
};

ClientModal.Close = function ClientClose({ ...restProps }) {
  return (
    <Close {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        fill="white"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </svg>
    </Close>
  );
};
