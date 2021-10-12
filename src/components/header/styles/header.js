import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
// containes and parents.
export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #f4f4f4;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  color: #000000;
  min-height: 10vh;
  width: 95%;
  margin: auto;
  padding-bottom: 24px;
`;

export const Group = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  background-color: #080808;
`;
// children.
export const FilterButton = styled.button`
  padding: 16px;
  border-radius: 100px;

  background-color: #eaeaea;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 500;
  color: #000000;
  border: ${({ active }) => (active ? `2px solid #030303` : `0px`)};
`;

export const PageTitle = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Inner = styled.div`
  display: flex;
  width: 95%;
  margin: auto;

  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(ReactRouterLink)`
  list-style: none;
  font-size: 24px;
  font-weight: 400;
  color: ${({ selected }) => (selected ? "#ffc500" : "#ffffff")};
  text-decoration: none;
  line-height: 1.2;
  border-bottom: ${({ selected }) => (selected ? "2px solid #ffc500" : "")};
`;

export const Logo = styled.h1`
  font-size: 40px;
  color: white;

  line-height: 1.2;
`;
