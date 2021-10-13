import React from "react";
import styled from "styled-components/macro";

export default function SmallImage() {
  const checkIfActive = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    } else e.target.classList.remove("active");
  };
  return (
    <Button onClick={checkIfActive}>
      <SmallImageHolder>
        <img
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            objectFit: "cover,",
          }}
          src=""
          alt=""
        />
      </SmallImageHolder>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  margin: 10px;
  outline: none;
`;

const SmallImageHolder = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  overflow: hidden;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
`;
