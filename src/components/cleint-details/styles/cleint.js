import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease 0.1s;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const Inner = styled.div`
  width: 87%;
  margin: auto;
  display: flex;
  gap: 24px;
  transition: all 0.5s ease 0.2s;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(80%)")};
  background-color: transparent;
  opacity: ${({ show }) => (show ? "1" : "0")};
  height: 60%;
`;

export const Info = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;
  padding: 40px;
  background-color: white;
  border-radius: 16px;
`;

export const SliderContainer = styled.div`
  flex: 2;
`;

export const Title = styled.h6`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  color: black;
`;

export const Description = styled.p`
  font-size: 24px;
  width: 100%;
  line-height: 140%;
  color: #6b6b6b;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;
