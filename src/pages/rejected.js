import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import data from "../data/data.json";

export default function Rejected() {
  const [cardData, setCardData] = useState(data.reject);
  const [category, setCategory] = useState("all");

  console.log(category);
  return (
    <>
      <HeaderContainer
        category={category}
        setCategory={setCategory}
        setCardData={setCardData}
        section="reject"
      />
      <HeroContainer cardData={cardData} />
    </>
  );
}
