import React, { useState, useEffect } from "react";
import {
  MacroListItem,
  MacroLabel,
  ProgressBar,
  ProgressBarData,
} from "../../../../StyledComponents/Plate/Macro";

const MACRO_TO_COLOR = {
  Energy: "rgb(100%,85%,0%)",
  Protien: "rgb(50%,75%,50%)",
  Fat: "rgb(75%,50%,50%)",
  Carbs: "rgb(50%,50%,75%)",
};

const MacroItem = ({ macro, calorieRequirement, foodsPlate }) => {
  const [barLabel, setBarLabel] = useState({
    numerator: 1,
    denominator: 1,
    units: "g",
    bar: 0,
  });

  useEffect(() => {
    const styleEffectsChange = () => {
      let tmpBarPercent =
        (parseFloat(macro.value) /
          parseFloat(macro.precent * calorieRequirement)) *
        100;
      if (tmpBarPercent > 100) tmpBarPercent = 100;
      else tmpBarPercent = tmpBarPercent.toFixed(2);

      macro.title === "Energy"
        ? setBarLabel({
            numerator: parseFloat(macro.value),
            denominator: calorieRequirement,
            units: "kcal",
            bar: tmpBarPercent,
          })
        : setBarLabel({
            numerator: parseFloat(macro.value),
            denominator: (macro.precent * calorieRequirement).toFixed(2),
            units: "g",
            bar: tmpBarPercent,
          });
    };

    styleEffectsChange();
  }, [macro.value, macro.precent, calorieRequirement, macro.title, foodsPlate]);

  return (
    <MacroListItem>
      <MacroLabel>
        {macro.title}:{barLabel.numerator}
        {barLabel.units}/{barLabel.denominator}
        {barLabel.units}
      </MacroLabel>
      <ProgressBar>
        <ProgressBarData
          color={MACRO_TO_COLOR[macro.title]}
          colorPercent={barLabel.bar}
        ></ProgressBarData>
      </ProgressBar>
    </MacroListItem>
  );
};

export default MacroItem;
