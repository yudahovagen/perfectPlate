import React, { useState, useEffect } from "react";
import MacroItem from "./MacroItem";
import { useSelector } from "react-redux";
import {
  Container,
  Title,
  MacroList,
  ChangeCalorieReqInput,
  ReqLabel,
} from "../../../../StyledComponents/Plate/Macro";

const MacroTargets = () => {
  const foodsPlate = useSelector((state) => state.plate.plate);
  const [calorieRequirement, setCalorieRequirement] = useState(2000);

  const [totalMacros, setTotalMacros] = useState([
    {
      value: 0,
      nutrientIdValue: 1008,
      title: "Energy",
      precent: 1,
      id: "1",
    },
    {
      value: 0,
      nutrientIdValue: 1003,
      title: "Protien",
      precent: (0.35 / 4).toFixed(2),
      id: "2",
    },
    {
      value: 0,
      nutrientIdValue: 1005,
      title: "Carbs",
      precent: (0.4 / 4).toFixed(2),
      id: "3",
    },
    {
      value: 0,
      nutrientIdValue: 1004,
      title: "Fat",
      precent: (0.25 / 9).toFixed(2),
      id: "4",
    },
  ]);

  useEffect(() => {
    const getTotalMacros = () => {
      const totalMacrosCopy = [...totalMacros];

      totalMacrosCopy.forEach((element, index, array) => {
        array[index].value = foodsPlate
          .reduce(
            (prevItem, currItem) =>
              prevItem +
              currItem.food.foodNutrients.find(
                (i) => i.nutrientId === element.nutrientIdValue
              ).value *
                currItem.portion.multi *
                currItem.serving,
            0
          )
          .toFixed(2);
      });

      setTotalMacros(totalMacrosCopy);
    };
    getTotalMacros();
  }, [foodsPlate, calorieRequirement]);

  return (
    <Container>
      <Title>Macronutrient Targets</Title>
      <MacroList>
        {totalMacros.map((macro) => (
          <MacroItem
            key={macro.id}
            macro={macro}
            calorieRequirement={calorieRequirement}
            foodsPlate={foodsPlate}
          />
        ))}
      </MacroList>
      <ReqLabel>
        Calorie Req:
        <ChangeCalorieReqInput
          placeholder="Calorie Req"
          type="number"
          min="500"
          step="50"
          max="5000"
          value={calorieRequirement}
          onChange={(e) => setCalorieRequirement(e.target.value)}
        />
      </ReqLabel>
    </Container>
  );
};

export default MacroTargets;
