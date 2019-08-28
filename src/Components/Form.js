import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  margin: 2rem;
  text-align: left;
  padding: 1rem;
  border: 2px solid #c0c0c0;
`;

const Label = styled.label`
  margin: 0 1rem;
`;

const Input = styled.input`
  margin: 1rem;
  font-size: 1rem;
`;

const Submit = styled.input`
  background-color: red;
  color: #fff;
  border-radius: 1rem;
  padding: 0.2rem;
  font-size: 1rem;
  width: 10rem;
  margin-left: 1rem;
`;

export default function Form() {
  return (
    <FormContainer id="form">
      <Label htmlFor="name">Name:</Label>
      <Input type="text" name="name" id="name" />
      <Label htmlFor="number">Phone number:</Label>
      <Input type="text" name="number" id="number" />
      <Label htmlFor="email">E-mail:</Label>
      <Input type="email" name="email" id="email" />
      <Label htmlFor="password">Password:</Label>
      <Input type="password" name="password" id="password" />
      <Submit type="submit" value="Submit"/>
    </FormContainer>
  )
};

