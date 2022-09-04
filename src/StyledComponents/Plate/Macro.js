import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h4`
  font-size: 2rem;
  padding: 0;
  margin: 2rem 0 0 0;
`;

const MacroList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MacroListItem = styled.li`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MacroLabel = styled.label``;

const ProgressBar = styled.div`
  height: 1.5rem;
  width: 75%;
  position: relative;
  background: #555;
  border-radius: 25px;
  padding: 5px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

const ProgressBarData = styled.span`
  display: block;
  height: 100%;
  padding: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43, 194, 83);
  background-color: ${(props) => props.color};
  background-image: linear-gradient(
    center bottom,
    rgb(43, 194, 83) 37%,
    rgb(84, 240, 84) 69%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  width: ${(props) => props.colorPercent + "%"};
  overflow: hidden;
`;

const ChangeCalorieReqInput = styled.input`
  margin: 0 1rem;
  border: none;
  padding: 0.15rem 0.5rem;
  border: solid 1px black;  
  font-size: 1rem;
  width: clamp(3rem, 10vw, 10rem);
`;

const ReqLabel = styled.label``;

const ChangeCalorieReqLabel = styled.button`
  border-radius: 5px;
  border: none;
  background-color: var(--light-orange);
  color: var(--blue);
  font-weight: 700;
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 1rem;
  &:hover {
    background-color: var(--orange);
  }
  transition: all 0.2s ease-in-out;
`;

export {
  Container,
  Title,
  MacroList,
  MacroListItem,
  MacroLabel,
  ProgressBar,
  ProgressBarData,
  ChangeCalorieReqInput,
  ChangeCalorieReqLabel,
  ReqLabel,
};
