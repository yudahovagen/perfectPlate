import React, { useState, useEffect, useCallback } from "react";
import { minerals } from "../../../../../data/microData";
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
  minerals.forEach((element) => {
    tmp.push({ id: element.nutrientId, amount: 0 });
  });
  return tmp;
};

const Minerals = ({ plate }) => {
  const [mineralsAmount, setMineralsAmount] = useState(() => getAmount());

  const getNutrientData = useCallback(() => {
    let mineralsAmountCopy = [...mineralsAmount];
    mineralsAmountCopy.forEach((e) => {
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
    return mineralsAmountCopy;
  }, [ plate]);

  useEffect(() => {
    setMineralsAmount(getNutrientData());
  }, [getNutrientData]);

  return (
    <MicroTable>
      <MicroCaption>Minerals</MicroCaption>
      <MicroTableHead>
        <MicroTableRow>
          <MicroTableCol>Name</MicroTableCol>
          <MicroTableCol>Amount</MicroTableCol>
          <MicroTableCol>Unit</MicroTableCol>
          <MicroTableCol>Daily Target</MicroTableCol>
        </MicroTableRow>
      </MicroTableHead>
      <MicroTableBody>
        {minerals.map((mineral) => (
          <MicroTableRow key={mineral.nutrientId}>
            <MicroTableCell>{mineral.name}</MicroTableCell>
            <MicroTableCell>
              {mineralsAmount.find((i) => i.id === mineral.nutrientId).amount}
            </MicroTableCell>
            <MicroTableCell>{mineral.unit}</MicroTableCell>
            <MicroTableCell>{mineral.target}</MicroTableCell>
          </MicroTableRow>
        ))}
      </MicroTableBody>
    </MicroTable>
  );
};

export default Minerals;
