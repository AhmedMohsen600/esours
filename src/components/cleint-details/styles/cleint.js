import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  transition: opacity 0.5s ease 0.1s;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const Inner = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5vw;
  transition: all 0.5s ease 0.2s;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(80%)")};
  background-color: transparent;
  opacity: ${({ show }) => (show ? "1" : "0")};
`;

export const Info = styled.div`
  max-height: 95vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 32%;
  padding: 2vw;
  background-color: white;
  border-radius: 16px;
  /* @media (max-width: 1070px) {
    max-height: 100vh;
  }
  @media (min-width: 1300px) {
    max-height: 60%;
  }
  @media (min-width: 2000px) {
    max-height: 100vh;
  } */
`;

export const SliderContainer = styled.div`
  flex: 2;
`;

export const Title = styled.h6`
  font-size: 1.5vw;
  line-height: 1.2;
  font-weight: 500;
  color: black;
`;

export const Description = styled.p`
  font-size: 1.05vw;
  width: 100%;
  line-height: 140%;
  color: #6b6b6b;
  margin-bottom: 1.5vw;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImagesHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  flex: 1;
  max-height: 95vh;
  overflow-y: scroll;
  border-radius: 16px;
`;

export const LockBody = createGlobalStyle`
        body{
          overflow:  ${({ show }) => (show ? "hidden" : "auto")};
        }
`;
