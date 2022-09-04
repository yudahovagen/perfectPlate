import React from "react";
import {
  CloseModalButton,
  ModalTitle,
  Title,
} from "../../../../StyledComponents/Main/Main";
import { actions } from "../../../../redux";
import { useDispatch } from "react-redux";

const ModalHeader = ({ setIsOpen, isOpen, setTmpFood, setFoodListByName }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.updateFoodItem({}));
    setTmpFood("");
    setFoodListByName([]);
    setIsOpen(!isOpen);
  };

  return (
    <ModalTitle>
      <Title>Add Food to Plate</Title>
      <CloseModalButton onClick={handleClick}>X</CloseModalButton>
    </ModalTitle>
  );
};

export default ModalHeader;
