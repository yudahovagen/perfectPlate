import React from "react";
import {
  Container,
  MainTitle,
  SecondaryTitle,
} from "../../StyledComponents/Main/Welcome";

const WelcomeMain = () => {
  return (
    <Container>
      <MainTitle>Welcome to Perfect Meal</MainTitle>
      <SecondaryTitle>
        a Website that help u track macronutrients and micronutrients of
        diffrent foods
      </SecondaryTitle>
    </Container>
  );
};

export default WelcomeMain;
