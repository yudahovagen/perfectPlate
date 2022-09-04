import React from "react";
import {
  PlateTableRow,
  PlateTableCell,
} from "../../../../StyledComponents/Plate/Plate";

const PlateTableItem = ({ item }) => {
  return (
    <PlateTableRow>
      <PlateTableCell>
        {item.food.lowercaseDescription}
        {item.food.brandName ? ", " + item.food.brandName.toLowerCase() : null}
      </PlateTableCell>
      <PlateTableCell>{item.serving}</PlateTableCell>
      <PlateTableCell>
        {item.portion.unit === "g" ? "100 gram" : "100 mililiter"}
      </PlateTableCell>
      <PlateTableCell>
        {(
          item.food.foodNutrients.find((i) => i.nutrientId === 1008).value *
          item.portion.multi *
          item.serving
        ).toFixed(2)}
      </PlateTableCell>
    </PlateTableRow>
  );
};

export default PlateTableItem;
