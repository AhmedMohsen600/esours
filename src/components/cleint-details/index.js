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
} from "./styles/cleint";

export default function ClientModal({ children, ...restProps }) {
  return (
    <Container className="dark" {...restProps}>
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
