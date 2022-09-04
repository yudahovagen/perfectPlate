import styled from "styled-components";

const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 3rem;
  gap: 1.5rem;
  @media (max-width: 500px) {
    margin-top: 10vh;
  }
`;

const AboutTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: var(--orange);
`;

const AboutInner = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

export { AboutContainer, AboutTitle, AboutInner };
