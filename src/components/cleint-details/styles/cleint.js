import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
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
  width: 91%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5vw;
  transition: all 0.5s ease 0.2s;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(80%)")};
  background-color: transparent;
  opacity: ${({ show }) => (show ? "1" : "0")};
  position: relative;
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

export const Close = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: -10%;
  border-radius: 50%;
  border: 0.2vw solid white;
  display: flex;
  justify-content: center;
  padding: 0.5vw;
  cursor: pointer;
  align-items: center;
`;
