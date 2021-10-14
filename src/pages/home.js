import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import data from "../data/data.json";

export default function Home() {
  const [cardData, setCardData] = useState(data.all);
  const [category, setCategory] = useState("all");
  return (
    <>
      <HeaderContainer
        setCardData={setCardData}
        category={category}
        setCategory={setCategory}
        section="all"
      />
      <HeroContainer cardData={cardData} />
    </>
  );
}
