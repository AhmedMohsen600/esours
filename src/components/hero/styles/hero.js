import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
`;

export const CardsHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
`;

export const Card = styled.div`
  display: flex;
  height: 240px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #d9d9d9;
`;

export const ProductName = styled.h4`
  font-size: 36px;
  color: #000000;
  font-weight: 600;
  line-height: 1.2;
`;

export const CleintId = styled.h5`
  font-size: 24px;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 1.2;
`;

export const Position = styled.div`
  border-radius: 100px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #b1b1b1;
`;

export const Picture = styled.div`
  width: 14%;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: grey;
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
  gap: 24px;
  background-color: white;
`;

export const Group = styled.div`
  display: flex;
  gap: 16px;
`;
