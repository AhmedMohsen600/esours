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
      <ClientModal
        onClick={(e) => {
          if (e.target.classList.contains("dark")) setShow(false);
          console.log(e.target.classList);
        }}
        show={show}
      >
        <SliderHolder>
          {filteredData.all.map((product) => (
            <ClientModal.Inner show={show}>
              <ClientModal.Info>
                <Hero.CleintId>#{product.id || ""}</Hero.CleintId>
                <Hero.ProductName>{product.productName || ""}</Hero.ProductName>
                <Hero.Group padding="0.3vw 0 1.6vw 0">
                  {product.categories
                    ? product.categories.map((card, index) => (
                        <Hero.Position key={index}>{card}</Hero.Position>
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
              <ClientModal.ImagesHolder>
                {filteredData.all.map((img) => (
                  <ClientModal.Image src={img.img} />
                ))}
              </ClientModal.ImagesHolder>
            </ClientModal.Inner>
          ))}
        </SliderHolder>
      </ClientModal>
    </>
  );
}
