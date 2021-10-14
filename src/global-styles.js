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
 .react-multi-carousel-list{
    width: 100% ;
    height: 100%;
    /* overflow-y: scroll; */
    /* display: flex ;
    justify-content: flex-start ;
    align-items: center; */
 }  
 .react-multi-carousel-item{
     /* height: 100% !important;  */
      /* overflow-y: scroll !important;  */
 }
`;
