import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem;
  @media (max-width: 500px) {
    margin-top: 10vh;
  }
`;
const MainTitle = styled.h1`
  font-size: clamp(2rem, 20vw, 5rem);
  color: var(--orange);
  margin: 0;
  font-weight: 700;
`;
const SecondaryTitle = styled.h2`
  font-size: clamp(1rem, 10vw, 3rem);
  color: var(--light-orange);
  margin: 0;
`;

export { Container, MainTitle, SecondaryTitle };
