import React from "react";
import { Modal } from "../../../../StyledComponents/Main/Main";
import AddFoodModal from "./AddFoodModal";
import ModalHeader from "./ModalHeader";

const ModalInner = ({
  setIsOpen,
  isOpen,
  tmpFood,
  setTmpFood,
  getFoodList,
  foodListByName,
  setFoodListByName,
  isLoading,
}) => {
  return (
    <Modal>
      <ModalHeader
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setTmpFood={setTmpFood}
        setFoodListByName={setFoodListByName}
      />
      <AddFoodModal
        tmpFood={tmpFood}
        setTmpFood={setTmpFood}
        getFoodList={getFoodList}
        setFoodListByName={setFoodListByName}
        setIsOpen={setIsOpen}
        foodListByName={foodListByName}
        isOpen={isOpen}
        isLoading={isLoading}
      />
    </Modal>
  );
};

export default ModalInner;
