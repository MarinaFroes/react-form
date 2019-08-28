import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid red;
`;

export default function Header() {
  return (
    <HeaderContainer id="header">
      Form
    </HeaderContainer>
  )
};

