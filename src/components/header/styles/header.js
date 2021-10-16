import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
// containes and parents.
export const Container = styled.header`
  display: flex;
  flex-direction: column;
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
  width: 100vw;
  padding: 1.2vw 2.5vw;
  margin: auto;
  background-color: white;
`;

export const Group = styled.div`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  background-color: #080808;
  padding: 1.2vw 0;
`;
// children.
export const FilterButton = styled.button`
  padding: 0.7vw 1vw;
  border-radius: 1000px;
  background-color: #eaeaea;
  font-size: 1.1vw;
  line-height: 1.2;
  font-weight: 400;
  cursor: pointer;
  color: #000000;
  border: ${({ active }) => (active ? `0.2vw solid #030303` : `0.1vw solid #b1b1b1`)};
  :hover{
    
    border: ${({ active }) => (active ? `0.2vw solid #030303` : `0.1vw solid #030303`)};
  }

`;

export const PageTitle = styled.h3`
  font-size: 1.9vw;
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
  font-size: 1.2vw;
  font-weight: 400;
  color: ${({ selected }) => (selected ? "#ffc500" : "#ffffff")};
  text-decoration: none;
  line-height: 1.2;
  cursor: pointer;
  border-bottom: ${({ selected }) => (selected ? "2px solid #ffc500" : "")};
  :hover {
    border-bottom: 2px solid #ffc500;
  }
`;

export const Logo = styled.h1`
  font-size: 40px;
  color: white;
  line-height: 1.2;
`;
