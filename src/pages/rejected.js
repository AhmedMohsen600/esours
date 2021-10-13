import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
export default function Rejected() {
  const [category, setCategory] = useState("all");

  console.log(category);
  return (
    <>
      <HeaderContainer category={category} setCategory={setCategory} />
      <HeroContainer category={category} />
    </>
  );
}
