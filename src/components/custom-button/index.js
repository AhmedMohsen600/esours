import React from "react";

export default function CustomRightArrow({ onClick }) {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        right: "1.6vw",
        width: "3vw",
        height: "3vw",
        borderRadius: "50%",
        padding: "0.5vw",
        backgroundColor: "transparent",
        border: "0.2vw solid white",
      }}
      onClick={() => onClick()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        fill="white"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          points="96 48 176 128 96 208"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </svg>
    </button>
  );
}
