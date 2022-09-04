import styled from "styled-components";

const Container = styled.div`
  visibility: ${(props) => (props.showContainer ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  color: var(--offWhite);
  padding: 0;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h4`
  display: inline-block;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  width: 30ch;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 1rem;
    margin: 0.25rem 0;
    width: fit-content;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;
//----------------------------------------------
const InnerLeft = styled.div`
  margin: 0;
  padding: 0;
`;
const MacroList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MacroItem = styled.li`
  display: block;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const MacroTitle = styled.h5`
  font-weight: 700;
  display: inline-block;
  font-size: inherit;
  margin: 0;
  padding: 0;
  font-style: italic;
`;
const MacroValue = styled.p`
  font-size: inherit;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0;
`;
const MacroValueCurrent = styled.span`
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: inherit;
`;

//----------------------------------------------
const InnerRight = styled.div``;
const InnerTitle = styled.h4`
  display: block;
  margin: 0.75rem 0;
  text-align: center;
`;

const InputFiled = styled.input`
  width: fit-content;
  padding: 0 1rem 0 0;
  border: 1px solid var(--grey);
  color: var(--blue);
  font-weight: 700;
`;
const ServingSize = styled.span``;
const AddToPlateButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: var(--light-orange);
  color: var(--blue);
  display: block;
  font-weight: 700;
  width: fit-content;
  padding: 0.35rem 1.5rem;
  margin: 0.75rem 0;
  cursor: pointer;
  margin: 0 auto;
  &:hover {
    background-color: var(--orange);
  }
`;

export {
  Container,
  Title,
  InnerContainer,
  InnerLeft,
  MacroList,
  MacroItem,
  MacroTitle,
  MacroValue,
  MacroValueCurrent,
  InnerRight,
  InnerTitle,
  InputFiled,
  ServingSize,
  AddToPlateButton,
};
