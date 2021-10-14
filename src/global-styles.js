import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 body{
    background-color: #f4f4f4;
    font-family: 'Inter', sans-serif;
   
 }
 .active {
    transform: scale(1.3);
    outline: 1px solid yellow;
 }
 .carousel .thumb img {
   width: 100% !important;
   height: 100% !important;
}

.carousel .slide img {
   max-height: 90vh;  /* change this to whatever you want */
   width: 100%;
}

.slider-wrapper{
   border-radius: 16px;
}
.thumb {
   cursor: pointer;
}
`;
