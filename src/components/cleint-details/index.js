import React from "react";
import {
  Container,
  Inner,
  Info,
  SliderContainer,
  Title,
  Description,
  LockBody,
} from "./styles/cleint";

export default function ClientModal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
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
ClientModal.LockBody = function ClientTitleLockBody({ ...restProps }) {
  return <LockBody {...restProps} />;
};
