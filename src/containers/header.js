import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
export function HeaderContainer({ setSlides, category, setCategory }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Header>
      <Header.Frame>
        <Header.Inner>
          <Header.Logo>ESOURS</Header.Logo>
          <Header.Group>
            <Header.Link selected={pathname === "/" ? true : false} to="/">
              All submitions
            </Header.Link>
            <Header.Link
              selected={pathname === "/short-list" ? true : false}
              to="/short-list"
            >
              Shortlisted
            </Header.Link>
            <Header.Link
              selected={pathname === "/rejected" ? true : false}
              to="/rejected"
            >
              Rejected
            </Header.Link>
          </Header.Group>
        </Header.Inner>
      </Header.Frame>
      <Header.Nav>
        <Header.PageTitle>Shortlist</Header.PageTitle>
        <Header.Group>
          <Header.FilterButton
            active={category === "all" ? true : false}
            onClick={() => setCategory("all")}
          >
            All
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "furniture" ? true : false}
            onClick={() => setCategory("furniture")}
          >
            Furniture
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "lighting" ? true : false}
            onClick={() => setCategory("lighting")}
          >
            Lighting
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "accessories" ? true : false}
            onClick={() => setCategory("accessories")}
          >
            Accessories
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "textiles" ? true : false}
            onClick={() => setCategory("textiles")}
          >
            Textiles
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "materials" ? true : false}
            onClick={() => setCategory("materials")}
          >
            Materials
          </Header.FilterButton>
        </Header.Group>
      </Header.Nav>
    </Header>
  );
}
