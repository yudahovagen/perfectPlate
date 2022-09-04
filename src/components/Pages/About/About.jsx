import React from "react";
import {
  AboutContainer,
  AboutTitle,
  AboutInner,
} from "../../../StyledComponents/About/About";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About the Site</AboutTitle>
      <AboutInner>
        this site was created to help people get comprehensive nutrition data
        from trusted sources.
      </AboutInner>
      <AboutInner>
        each user can look at data about each food item or as a total of a
        plate.
      </AboutInner>
    </AboutContainer>
  );
};

export default About;
