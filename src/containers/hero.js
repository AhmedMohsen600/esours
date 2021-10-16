import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import { Hero, ClientModal, SliderHolder, MyImage } from "../components";
import filteredData from "../data/newData.json";
import { getItem } from "../lib/helper";
export function HeroContainer({ category }) {
  const [show, setShow] = useState(false);
  // const [cardObj, setCardOjb] = useState(
  //   JSON.parse(localStorage.getItem("card")) || {}
  // );

  const { pathname } = useLocation();
  const sliderRef = useRef(null);

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
        <ClientModal.LockBody show={show} />
        <Hero.CardsHolder>
          {dataToShow.map((card, i) => (
            <Hero.Card
              onClick={() => {
                localStorage.setItem("card", JSON.stringify(card));
                sliderRef.current.goToSlide(i);
                setShow(true);
              }}
              key={card.id}
            >
              <Hero.Picture>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={card.img}
                  alt="product"
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
        <SliderHolder reff={sliderRef}>
          {filteredData[category]
            ? filteredData[category].map((product) => (
                <ClientModal.Inner key={product.id} show={show}>
                  <div
                    style={{
                      display: "flex",
                      height: "94.5vh",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* <ClientModal.Close onClick={() => setShow(false)} /> */}
                  </div>
                  <ClientModal.Info>
                    <Hero.CleintId>#{product.id || ""}</Hero.CleintId>
                    <Hero.ProductName>
                      {product.productName || ""}
                    </Hero.ProductName>
                    <Hero.Group padding="0.3vw 0 1.6vw 0">
                      {product.categories
                        ? product.categories.map((card, index) => (
                            <Hero.Position key={index}>{card}</Hero.Position>
                          ))
                        : ""}
                    </Hero.Group>
                    <ClientModal.Title>Note of the intention</ClientModal.Title>
                    <ClientModal.Description>
                      {product.a1}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      About the product development & research
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.a2}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      Does this product tackle the "Sustainability" criteria?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q1}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      How is the criteria fulfilled?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q2}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      Does this product tackle the "Functionality" criteria?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q3}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      How is the criteria fulfilled?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q4}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      Does this product tackle the "Innovation" criteria?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q5}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      How is the criteria fulfilled?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q6}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      Does this product tackle the "Feasbility" criteria?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q7}
                    </ClientModal.Description>
                    <ClientModal.Title>
                      How is the criteria fulfilled?
                    </ClientModal.Title>
                    <ClientModal.Description>
                      {product.q8}
                    </ClientModal.Description>
                  </ClientModal.Info>
                  <ClientModal.ImagesHolder>
                    {product.images &&
                      product.images.map((img, index) => (
                        <MyImage key={index} src={img} />
                      ))}
                  </ClientModal.ImagesHolder>
                  <div
                    style={{
                      height: "94.5vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <ClientModal.Close
                      onClick={() => {
                        setShow(false);
                      }}
                    />
                  </div>
                </ClientModal.Inner>
              ))
            : ""}
        </SliderHolder>
      </ClientModal>
    </>
  );
}
