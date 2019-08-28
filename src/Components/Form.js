import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid green;
`;

export default function Form() {
  return (
    <FormContainer id="form">
    </FormContainer>
  )
};

