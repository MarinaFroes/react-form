import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  margin: 2rem;
  text-align: left;
  border: 2px solid green;
`;

export default function Form() {
  return (
    <FormContainer id="form">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password"/>
    </FormContainer>
  )
};

