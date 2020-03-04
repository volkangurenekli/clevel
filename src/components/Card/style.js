import styled from "styled-components";

export const Title = styled.div`
  text-align: center;
  font-family: Gadget;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  color: black;
`;

export const Picture = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 40px;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 40px;
  object-fit: cover;
`;

export const Card = styled.div` 
margin: 30px auto;
width: 300px;
height: 300px;
border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
cursor: pointer;
transition: 0.4s;
&:hover{
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);

`;

export const Container = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 6rem;
`;
