import React from "react";
import {
  InnerRight,
  InnerTitle,
  InputFiled,
  ServingSize,
  AddToPlateButton,
} from "../../../../../StyledComponents/Main/FoodInfo";
import { useDispatch } from "react-redux";
import { plateactions, actions } from "../../../../../redux";

const DescriptionRight = ({
  serving,
  setServing,
  food,
  setTmpFood,
  setFoodListByName,
  setIsOpen,
  isOpen,
  portionMultiplier,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      plateactions.addFoodToPlate({
        food,
        serving: parseFloat(serving),
        id: food.fdcId,
        portion: portionMultiplier,
      })
    );
    dispatch(actions.updateFoodItem({}));

    setTmpFood("");
    setFoodListByName([]);
    setIsOpen(!isOpen);
  };
  return (
    <InnerRight>
      <InnerTitle>serving</InnerTitle>
      <InputFiled
        type="number"
        step=".01"
        value={serving}
        onChange={(e) => setServing(e.target.value)}
      />
      <ServingSize>100g</ServingSize>
      <AddToPlateButton onClick={handleClick}>Add</AddToPlateButton>
    </InnerRight>
  );
};

export default DescriptionRight;
