import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
export default function Shortlisted() {
  const [category, setCategory] = useState("all");
  const [slides, setSlides] = useState([]);
  return (
    <>
      <HeaderContainer
        category={category}
        setCategory={setCategory}
        setSlides={setSlides}
      />
      <HeroContainer />
    </>
  );
}
