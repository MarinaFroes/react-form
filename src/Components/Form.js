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

const Textarea = styled.textarea`
  margin: 1rem;
  font-size: 1rem;
`;

const Submit = styled.input`
  background-color: #c0c0c0;;
  color: #000;
  border-radius: 0.3rem;
  padding: 0.2rem;
  font-size: 1rem;
  width: 10rem;
  margin-left: 1rem;
`;

export default function Form() {
  // const [userName, setUserName] = React.useState("");
  // const [phoneNumber, setPhoneNumber] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  //Code from: https://zacjones.io/handle-multiple-inputs-in-react-with-hooks
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: "",
      phoneNumber: "",
      email: "",
      message: ""
    }
  );

  const handleInputChange = event => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({ [name]: newValue });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${userInput.userName}`);
    console.log(`Phone: ${userInput.phoneNumber}`);
    console.log(`E-mail: ${userInput.email}`);
    console.log(`Message: ${userInput.message}`);
  }

  return (
    <FormContainer id="form" onSubmit={handleSubmit}>
      <Label htmlFor="userName">Name:</Label>
      <Input
        type="text"
        name="userName"
        id="userName"
        value={userInput.userName}
        onChange={handleInputChange}
      />

      <Label htmlFor="phoneNumber">Phone number:</Label>
      <Input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={userInput.phoneNumber}
        onChange={handleInputChange}
      />

      <Label htmlFor="email">E-mail:</Label>
      <Input
        type="email"
        name="email"
        id="email"
        value={userInput.email}
        onChange={handleInputChange}
      />

      <Label htmlFor="message">Message:</Label>
      <Textarea
        name="message"
        id="message"
        value={userInput.message}
        onChange={handleInputChange}
      />

      <Submit type="submit" value="Submit"/>
    </FormContainer>
  )
};

