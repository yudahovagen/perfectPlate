import React, { useEffect, useState } from "react";
import MacroListItem from "./MacroListItem";
import {
  InnerLeft,
  MacroList,
} from "../../../../../StyledComponents/Main/FoodInfo";

const DescriptionLeft = ({ food, portionMultiplier, serving }) => {
  //total will hold the total of fats carbs and protiens - will be passed as props
  const [total, setTotal] = useState(1);
  //macro will hold all the information about each macro - will be passed as props
  const [macro, setMacro] = useState([
    { value: 1, title: "Protien:", id: "1", nutrientId: 1003 },
    { value: 1, title: "Net Carb:", id: "2", nutrientId: 1005 },
    { value: 1, title: "Fat:", id: "3", nutrientId: 1004 },
    { value: 1, title: "Calories:", id: "4", nutrientId: 1008 },
  ]);

  useEffect(() => {
    const getAllMacros = () => {
      //we first need to check for an empty foodNutrients array case
      if (food.foodNutrients.length === 0) return;
      const tmpArray = [...macro];
      tmpArray.forEach((element, index, array) => {
        array[index].value = (
          food.foodNutrients.filter(
            (item) => item.nutrientId === element.nutrientId
          )[0].value *
          portionMultiplier.multi *
          serving
        ).toFixed(2);
      });
      //here we calculate the total calories from our food (carbs and protien are multiply by 4, fat by 9)
      let output = tmpArray.reduce(function (previousValue, currentValue) {
        if (currentValue.title === "Calories:") {
          return previousValue + 0;
        }
        let tmp = parseFloat(currentValue.value);
        if (currentValue.title === "Fat:") return previousValue + 9 * tmp;
        else return previousValue + 4 * tmp;
      }, 0);

      setTotal(output.toFixed(2));

      setMacro(tmpArray);
    };

    if (food.fdcId) getAllMacros();
  }, [food, portionMultiplier]);

  return (
    <InnerLeft>
      <MacroList>
        {macro.map((item) => (
          <MacroListItem
            item={item}
            serving={serving}
            key={item.id}
            total={total}
          />
        ))}
      </MacroList>
    </InnerLeft>
  );
};

export default DescriptionLeft;
