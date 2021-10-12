import React from "react";
import {
  Container,
  CardsHolder,
  Card,
  CleintId,
  ProductName,
  Group,
  Info,
  Position,
  Picture,
} from "./styles/hero";
export default function Hero({ children }) {
  return <Container>{children}</Container>;
}

Hero.CardsHolder = function HeroCardsHolder({ children }) {
  return <CardsHolder>{children}</CardsHolder>;
};

Hero.Card = function HeroCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Hero.CleintId = function HeroCleintId({ children }) {
  return <CleintId>{children}</CleintId>;
};

Hero.Group = function HeroCardsHolder({ children }) {
  return <Group>{children}</Group>;
};

Hero.ProductName = function HeroProductName({ children }) {
  return <ProductName>{children}</ProductName>;
};

Hero.Info = function HeroInfo({ children }) {
  return <Info>{children}</Info>;
};

Hero.Position = function HeroPosition({ children }) {
  return <Position>{children}</Position>;
};

Hero.Picture = function HeroPicture({ children }) {
  return <Picture>{children}</Picture>;
};
