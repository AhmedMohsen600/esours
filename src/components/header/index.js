import React from "react";

import {
  Container,
  Nav,
  Frame,
  Link,
  FilterButton,
  PageTitle,
  Logo,
  Group,
  Inner,
} from "./styles/header";

export default function Header({ children }) {
  return <Container>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Frame = function HeaderFrame({ children }) {
  return <Frame>{children}</Frame>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FilterButton = function HeaderFilterButton({ children, ...restProps }) {
  return <FilterButton {...restProps}>{children}</FilterButton>;
};

Header.PageTitle = function HeaderPageTitle({ children }) {
  return <PageTitle>{children}</PageTitle>;
};

Header.Logo = function HeaderLogo({ children }) {
  return <Logo>{children}</Logo>;
};

Header.Group = function HeaderGroup({ children }) {
  return <Group>{children}</Group>;
};

Header.Inner = function HeaderInner({ children }) {
  return <Inner>{children}</Inner>;
};
