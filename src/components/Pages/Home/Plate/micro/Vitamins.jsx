import React, { useState, useEffect, useCallback } from "react";
import { vitamins } from "../../../../../data/microData";
import {
  MicroTable,
  MicroTableCol,
  MicroTableCell,
  MicroTableRow,
  MicroTableHead,
  MicroTableBody,
  MicroCaption,
} from "../../../../../StyledComponents/Plate/Micor";

const getAmount = () => {
  const tmp = [];
  vitamins.forEach((element) => {
    tmp.push({ id: element.nutrientId, amount: 0 });
  });
  return tmp;
};

const Vitamins = ({ plate }) => {
  const [vitaminsAmount, setVitaminsAmount] = useState(() => getAmount());

  const getNutrientData = useCallback(() => {
    let vitaminsAmountCopy = [...vitaminsAmount];
    vitaminsAmountCopy.forEach((e) => {
      e.amount = plate
        .reduce(function (previousValue, currentValue) {
          let tmp = currentValue.food.foodNutrients.find(
            (foodItem) => foodItem.nutrientId === e.id
          );
          if (tmp) {
            return (
              tmp.value * currentValue.portion.multi * currentValue.serving +
              previousValue
            );
          } else return previousValue;
        }, 0)
        .toFixed(3);
    });
    return vitaminsAmountCopy;
  }, [ plate]);

  useEffect(() => {
    setVitaminsAmount(getNutrientData());
  }, [getNutrientData]);

  return (
    <MicroTable>
      <MicroCaption>Vitamins</MicroCaption>
      <MicroTableHead>
        <MicroTableRow>
          <MicroTableCol>Name</MicroTableCol>
          <MicroTableCol>Amount</MicroTableCol>
          <MicroTableCol>Unit</MicroTableCol>
          <MicroTableCol>Daily Target</MicroTableCol>
        </MicroTableRow>
      </MicroTableHead>
      <MicroTableBody>
        {vitamins.map((vitamin) => (
          <MicroTableRow key={vitamin.nutrientId}>
            <MicroTableCell>{vitamin.name}</MicroTableCell>
            <MicroTableCell>
              {vitaminsAmount.find((i) => i.id === vitamin.nutrientId).amount}
            </MicroTableCell>
            <MicroTableCell>{vitamin.unit}</MicroTableCell>
            <MicroTableCell>{vitamin.target}</MicroTableCell>
          </MicroTableRow>
        ))}
      </MicroTableBody>
    </MicroTable>
  );
};

export default Vitamins;
