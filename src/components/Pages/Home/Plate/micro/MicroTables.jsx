import React from "react";
import Minerals from "./Minerals";
import Vitamins from "./Vitamins";
import { useSelector } from "react-redux";
import { MicroTableContainer } from "../../../../../StyledComponents/Plate/Micor";

const MicroTables = () => {
  const plate = useSelector((state) => state.plate.plate);
  return (
    <MicroTableContainer>
      <Minerals plate={plate} />
      <Vitamins plate={plate} />
    </MicroTableContainer>
  );
};

export default MicroTables;
