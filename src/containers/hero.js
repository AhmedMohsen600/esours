import React, { useState } from "react";
import { useLocation } from "react-router";
import { Hero, ClientModal, SliderHolder } from "../components";
import filteredData from "../data/data.json";
import { getItem } from "../lib/helper";
export function HeroContainer({ category }) {
  const [show, setShow] = useState(false);
  const [cardObj, setCardOjb] = useState(
    JSON.parse(localStorage.getItem("card")) || {}
  );
  const data = [1, 2, 3, 4, 5, 6];
  const { pathname } = useLocation();

  let dataToShow = filteredData[category];

  if (pathname === "/shortlist") {
    const shortlist = getItem("shortlist");
    dataToShow = filteredData[category].filter((item) =>
      shortlist.includes(item.id)
    );
  }

  if (pathname === "/rejected") {
    const rejectedList = getItem("rejected");
    dataToShow = filteredData[category].filter((item) =>
      rejectedList.includes(item.id)
    );
  }

  // console.log({ filteredData: filteredData[category], category });

  return (
    <>
      <Hero>
        <Hero.CardsHolder>
          {dataToShow.map((card) => (
            <Hero.Card
              onClick={() => {
                localStorage.setItem("card", JSON.stringify(card));
                setCardOjb(card);
                setShow(true);
              }}
              key={card.id}
            >
              <Hero.Picture />
              <Hero.Info>
                <Hero.CleintId>#{card.id}</Hero.CleintId>
                <Hero.ProductName>{card.productName}</Hero.ProductName>
                <Hero.Group>
                  {card.categories.map((category, index) => (
                    <Hero.Position key={index}>{category}</Hero.Position>
                  ))}
                </Hero.Group>
              </Hero.Info>
            </Hero.Card>
          ))}
        </Hero.CardsHolder>
      </Hero>
      <ClientModal show={show}>
        <SliderHolder>
          {data.map((koko) => (
            <ClientModal.Inner show={show}>
              <ClientModal.Info>
                <Hero.CleintId>#{cardObj.id || ""}</Hero.CleintId>
                <Hero.ProductName>{cardObj.productName || ""}</Hero.ProductName>
                <Hero.Group>
                  {cardObj.categories
                    ? cardObj.categories.map((card, index) => (
                        <Hero.Position key={index}>{card}</Hero.Position>
                      ))
                    : ""}
                </Hero.Group>
                <ClientModal.Title>Note of the intention</ClientModal.Title>
                <ClientModal.Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, odio.
                </ClientModal.Description>
                <ClientModal.Title>Note of the intention</ClientModal.Title>
                <ClientModal.Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, odio.
                </ClientModal.Description>
                <ClientModal.Title>Note of the intention</ClientModal.Title>
                <ClientModal.Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, odio.
                </ClientModal.Description>
                <ClientModal.Title>Note of the intention</ClientModal.Title>
                <ClientModal.Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nisi, odio.
                </ClientModal.Description>
              </ClientModal.Info>
              <ClientModal.SliderContainer></ClientModal.SliderContainer>
            </ClientModal.Inner>
          ))}
        </SliderHolder>
      </ClientModal>
    </>
  );
}
