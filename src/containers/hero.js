import React, { useEffect, useState } from "react";
import { Hero, ClientModal, Slider } from "../components";
import cardData from "../data/card.json";
export function HeroContainer() {
  const [show, setShow] = useState(false);
  const [cardObj, setCardOjb] = useState(
    JSON.parse(localStorage.getItem("card")) || {}
  );
  useEffect(() => {}, []);
  return (
    <>
      <Hero>
        <Hero.CardsHolder>
          {cardData.map((card) => (
            <Hero.Card
              onClick={() => {
                localStorage.setItem("card", JSON.stringify(card));
                setCardOjb(card);
                console.log("trash");
                setShow(true);
              }}
              key={card.id}
            >
              <Hero.Picture />
              <Hero.Info>
                <Hero.CleintId>{card.id}</Hero.CleintId>
                <Hero.ProductName>{card.name}</Hero.ProductName>
                <Hero.Group>
                  {card.category.map((single, index) => (
                    <Hero.Position key={index}>{single.name}</Hero.Position>
                  ))}
                </Hero.Group>
              </Hero.Info>
            </Hero.Card>
          ))}
        </Hero.CardsHolder>
      </Hero>
      <ClientModal show={show}>
        <Slider>
          <ClientModal.Inner show={show}>
            <ClientModal.Info>
              <Hero.CleintId>{cardObj.id || ""}</Hero.CleintId>
              <Hero.ProductName>{cardObj.name || ""}</Hero.ProductName>
              <Hero.Group>
                {cardObj.category
                  ? cardObj.category.map((card, index) => (
                      <Hero.Position key={index}>{card.name}</Hero.Position>
                    ))
                  : ""}
              </Hero.Group>
              <ClientModal.Title>Note of the intention</ClientModal.Title>
              <ClientModal.Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                odio.
              </ClientModal.Description>
              <ClientModal.Title>Note of the intention</ClientModal.Title>
              <ClientModal.Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                odio.
              </ClientModal.Description>
              <ClientModal.Title>Note of the intention</ClientModal.Title>
              <ClientModal.Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                odio.
              </ClientModal.Description>
              <ClientModal.Title>Note of the intention</ClientModal.Title>
              <ClientModal.Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
                odio.
              </ClientModal.Description>
            </ClientModal.Info>
            <ClientModal.SliderContainer></ClientModal.SliderContainer>
          </ClientModal.Inner>
        </Slider>
      </ClientModal>
    </>
  );
}
