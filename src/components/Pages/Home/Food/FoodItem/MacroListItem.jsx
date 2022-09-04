import React from "react";
import {
  MacroItem,
  MacroTitle,
  MacroValue,
  MacroValueCurrent,
} from "../../../../../StyledComponents/Main/FoodInfo";

const MacroListItem = ({ item, serving, total }) => {
  return (
    <MacroItem>
      <MacroTitle>{item.title}</MacroTitle>
      <MacroValue>{(parseFloat(item.value) * serving).toFixed(2)}</MacroValue>
      {item.title === "Calories:" ? (
        <MacroValueCurrent>100%</MacroValueCurrent>
      ) : item.title === "Fat:" ? (
        <MacroValueCurrent>
          {((parseFloat(item.value) * 9 * 100) / total).toFixed(2)}%
        </MacroValueCurrent>
      ) : (
        <MacroValueCurrent>
          {((parseFloat(item.value) * 4 * 100) / total).toFixed(2)}%
        </MacroValueCurrent>
      )}
    </MacroItem>
  );
};

export default MacroListItem;
