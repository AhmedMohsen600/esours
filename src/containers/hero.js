import React, { useState } from "react";
import {
  Hero,
  ClientModal,
  SliderHolder,
  ImageGallaryComponent,
} from "../components";

export function HeroContainer({ cardData }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Hero>
        <ClientModal.LockBody show={show} />
        <Hero.CardsHolder>
          {cardData.map((card) => (
            <Hero.Card
              onClick={() => {
                localStorage.setItem("card", JSON.stringify(card));
                setShow(true);
              }}
              key={card.id}
            >
              <Hero.Picture>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={card.img}
                  alt=""
                />
              </Hero.Picture>
              <Hero.Info>
                <Hero.CleintId>#{card.id}</Hero.CleintId>
                <Hero.ProductName onlyHero="1.6vw">
                  {card.productName}
                </Hero.ProductName>
                <Hero.Group padding="0.1vw 0 0 0 ">
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
          {cardData.map((product) => (
            <ClientModal.Inner show={show}>
              <ClientModal.Info>
                <Hero.CleintId>#{product.id}</Hero.CleintId>
                <Hero.ProductName>{product.productName}</Hero.ProductName>
                <Hero.Group padding="0.3vw 0 1.6vw 0">
                  {product.categories
                    ? product.categories.map((c, i) => (
                        <Hero.Position key={i}>{c}</Hero.Position>
                      ))
                    : ""}
                </Hero.Group>
                <ClientModal.Title>Note of the intention</ClientModal.Title>
                <ClientModal.Description>{product.a1}</ClientModal.Description>
                <ClientModal.Title>
                  About the product development & research
                </ClientModal.Title>
                <ClientModal.Description>{product.a2}</ClientModal.Description>
                <ClientModal.Title>
                  Does this product tackle the "Sustainability" criteria?
                </ClientModal.Title>
                <ClientModal.Description>{product.q1}</ClientModal.Description>
                <ClientModal.Title>
                  How is the criteria fulfilled?
                </ClientModal.Title>
                <ClientModal.Description>{product.q2}</ClientModal.Description>
                <ClientModal.Title>
                  Does this product tackle the "Functionality" criteria?
                </ClientModal.Title>
                <ClientModal.Description>{product.q3}</ClientModal.Description>
                <ClientModal.Title>
                  How is the criteria fulfilled?
                </ClientModal.Title>
                <ClientModal.Description>{product.q4}</ClientModal.Description>
                <ClientModal.Title>
                  Does this product tackle the "Innovation" criteria?
                </ClientModal.Title>
                <ClientModal.Description>{product.q5}</ClientModal.Description>
                <ClientModal.Title>
                  How is the criteria fulfilled?
                </ClientModal.Title>
                <ClientModal.Description>{product.q6}</ClientModal.Description>
                <ClientModal.Title>
                  Does this product tackle the "Feasbility" criteria?
                </ClientModal.Title>
                <ClientModal.Description>{product.q7}</ClientModal.Description>
                <ClientModal.Title>
                  How is the criteria fulfilled?
                </ClientModal.Title>
                <ClientModal.Description>{product.q8}</ClientModal.Description>
              </ClientModal.Info>
              <ClientModal.SliderContainer>
                <ImageGallaryComponent imgData={product.images} />
              </ClientModal.SliderContainer>
            </ClientModal.Inner>
          ))}
        </SliderHolder>
      </ClientModal>
    </>
  );
}
