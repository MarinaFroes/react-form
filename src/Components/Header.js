import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  padding: 1.5rem;
`;

export default function Header() {
  return (
    <HeaderContainer id="header">
      <Heading>Form</Heading>
    </HeaderContainer>
  )
};

