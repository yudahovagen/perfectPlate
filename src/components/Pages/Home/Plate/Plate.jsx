import React from "react";
import MainTable from "./MainTable";
import MacroTargets from "./MacroTargets";
import MicroTables from "./micro/MicroTables";
import { PlateContainer } from "../../../../StyledComponents/Plate/Plate";

const Plate = () => {
  return (
    <PlateContainer>
      <MainTable />
      <MacroTargets />
      <MicroTables />
    </PlateContainer>
  );
};

export default Plate;
