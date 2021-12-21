import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer2 } from "../containers/hero2";
// import { getItem, setItem } from "../lib/helper";
export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <HeaderContainer setCategory={setCategory} category={category} />
      <HeroContainer2 category={category} setCategory={setCategory} />
    </>
  );
}
