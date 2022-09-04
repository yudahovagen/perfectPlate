import React from "react";
import {
  SearchTableRow,
  SearchTableCell,
} from "../../../../StyledComponents/Main/SearchTable";
import { actions } from "../../../../redux";
import { useDispatch } from "react-redux";

const Food = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <SearchTableRow>
      <SearchTableCell onClick={() => dispatch(actions.updateFoodItem(food))}>
        {food.lowercaseDescription}
        {food.brandName ? ", " + food.brandName.toLowerCase() : null}
      </SearchTableCell>
    </SearchTableRow>
  );
};

export default Food;
