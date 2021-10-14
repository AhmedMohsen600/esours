import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  padding: 2vw 0;
`;

export const CardsHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.3vw;
`;

export const Card = styled.div`
  display: flex;
  height: 13vw;
  width: 100%;
  border-radius: 16px;
  border: 0.1vw solid #d9d9d9;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h4`
  font-size: ${({ onlyHero }) => (onlyHero ? "1.6vw" : "2vw")};
  color: #000000;
  font-weight: 700;
  line-height: 1.2;
`;

export const CleintId = styled.h5`
  font-size: 1.2vw;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 1.2;
`;

export const Position = styled.div`
  border-radius: 100px;
  padding: 0.7vw 0.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #b1b1b1;
  font-size: 1.05vw;
`;

export const Picture = styled.div`
  width: 14vw;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: #aeaeae;
  overflow: hidden;
`;

export const Info = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 48px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  gap: 1.2vw;
  background-color: white;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: ${({ padding }) => padding};
`;
