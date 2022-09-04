import React from "react";
import {
  PlateTableHead,
  PlateTableBody,
  PlateTable,
  PlateTableCol,
  PlateTableRow,
  TableContainer,
} from "../../../../StyledComponents/Plate/Plate";
import { useSelector } from "react-redux";
import PlateTableItem from "./PlateTableItem";

const MainTable = () => {
  const plateItems = useSelector((state) => state.plate.plate);
  
  return (
    <TableContainer>
      <PlateTable>
        <PlateTableHead>
          <PlateTableRow>
            <PlateTableCol>Description</PlateTableCol>
            <PlateTableCol>Serving</PlateTableCol>
            <PlateTableCol>Unit</PlateTableCol>
            <PlateTableCol>Calorie</PlateTableCol>
          </PlateTableRow>
        </PlateTableHead>
        <PlateTableBody>
          {plateItems.map((item) => (
            <PlateTableItem item={item} key={item.id+Math.random().toFixed(3)} />
          ))}
        </PlateTableBody>
      </PlateTable>
    </TableContainer>
  );
};
export default MainTable;
