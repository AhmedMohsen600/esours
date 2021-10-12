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
            <Header.Link
              selected={pathname === "/all-submitions" ? true : false}
              to="/all-submitions"
            >
              All submitions
            </Header.Link>
            <Header.Link
              selected={pathname === "/shortlist" ? true : false}
              to="/shortlist"
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
        <Header.PageTitle>
          {pathname === "/all-submitions"
            ? "All submissions"
            : pathname.slice(1).replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
        </Header.PageTitle>
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
            active={category === "textile" ? true : false}
            onClick={() => setCategory("textile")}
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
