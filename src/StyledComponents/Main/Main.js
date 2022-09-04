import styled from "styled-components";

const MainWrapeer = styled.div`
  background-color: inherit;
  display: flex;
  padding-top: 8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OpenFoodModalButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: var(--light-orange);
  color: var(--blue);
  font-weight: 700;
  padding: 0.5rem 2rem;
  cursor: pointer;
  margin: 0.5rem 1rem;
  &:hover {
    background-color: var(--orange);
  }
  transition: all 0.2s ease-in-out;
`;

const FoodSearchForm = styled.form`
  z-index: 5;
  margin: 0;
  padding: 0;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const FoodSearchInput = styled.input`
  padding: 0.25rem 1rem;
  margin: 0.25rem;
  border: solid 1px black;
  font-size: 1rem;
  width: fit-content;
`;

const SearchButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: var(--light-orange);
  color: var(--blue);
  font-weight: 700;
  padding: 0.5rem 2rem;
  cursor: pointer;
  margin: 0.5rem 1rem;
  &:hover {
    background-color: var(--orange);
  }
  transition: all 0.2s ease-in-out;
`;

const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Title = styled.h4`
  font-size: 2rem;
  margin: 2rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const CloseModalButton = styled.button`
  border: none;
  border-radius: 35%;
  padding: 1rem;
  cursor: pointer;
  background-color: var(--light-orange);
  color: var(--blue);
  font-weight: 700;
  &:hover {
    background-color: var(--orange);
  }
  transition: all 0.2s ease-in-out;
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding-top: 3rem;
`;

const Modal = styled.div`
  position: relative;
  z-index: 102;
  background-color: var(--blue);
  max-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: fit-content;
  top: 50%;
  left: 50%;
  padding: 1.25rem;
  transform: translate(-50%, -50%);
  @media (max-width: 500px) {
    width: 75vw;
  }
`;
const LoadingImageContainer = styled.img`
  width: 150px;
  aspect-ratio: 1/1;
`;

export {
  MainWrapeer,
  OpenFoodModalButton,
  FoodSearchForm,
  FoodSearchInput,
  SearchButton,
  ModalContainer,
  CloseModalButton,
  ModalTitle,
  Title,
  Modal,
  LoadingImageContainer,
};
