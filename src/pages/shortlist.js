import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import data from "../data/data.json";

export default function Shortlisted() {
  const [cardData, setCardData] = useState(data.short);
  const [category, setCategory] = useState("all");
  return (
    <>
      <HeaderContainer
        category={category}
        setCategory={setCategory}
        setCardData={setCardData}
        section="short"
      />
      <HeroContainer cardData={cardData} />
    </>
  );
}
