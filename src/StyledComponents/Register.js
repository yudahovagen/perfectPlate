import styled from "styled-components";

const FormContainer = styled.form`
  color: var(--orange);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10vh 0 0 0;
  background-color: inherit;
  justify-content: center;
  align-items: center;
`;
const FormHeader = styled.h1`
  font-size: 3rem;
  font-weight: inherit;
`;
const FormInput = styled.input`
  font-size: 2rem;
  width: fit-content;
  border: none;
  padding: 0;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const FormButton = styled.button`
  font-size: inherit;
  color: var(--blue);
  outline: none;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  background-color: var(--orange);
  cursor: pointer;
  &:hover {
    background-color: var(--light-orange);
    font-weight: 700;
  }
`;

export { FormContainer, FormHeader, FormInput, FormButton };
