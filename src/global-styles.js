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

 .react-multiple-carousel__arrow{
    bottom: 0;
    padding: 0.5vw;
    width: 2vw ;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
 }
.react-multiple-carousel__arrow--right{
    right: 17px;
 }
 .react-multiple-carousel__arrow--left{
    left: 17px;
 }
 .react-multiple-carousel__arrow::before{
  
   
 }
`;
