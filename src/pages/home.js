import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { getItem, setItem } from "../lib/helper";
export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <HeaderContainer setCategory={setCategory} category={category} />
      <HeroContainer category={category} setCategory={setCategory} />
    </>
  );
}
