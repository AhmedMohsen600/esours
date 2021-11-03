import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer2 } from "../containers/hero2";
export default function Shortlisted() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <HeaderContainer category={category} setCategory={setCategory} />
      <HeroContainer2 category={category} />
    </>
  );
}
