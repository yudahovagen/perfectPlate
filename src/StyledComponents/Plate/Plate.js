import styled from "styled-components";

const PlateContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem;
`;

const TableContainer = styled.div`
  margin: 0;
  padding: 0;
  height: clamp(10rem, 35vh, 30rem);
  width: 75%;
  margin: 0 auto;
  overflow-x: auto;
`;

const PlateTable = styled.table`
  overflow: auto;
  background: var(--dark-blue);
  font-family: "Open Sans", sans-serif;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 0;
  width: 100%;
`;

const PlateTableCol = styled.th`
  border-bottom: 1px solid var(--grey-bluish);
  color: var(--yellow-orange);
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
`;

const PlateTableCell = styled.td`
  color: var(--offWhite);
  font-weight: 400;
  padding: 0.65em 1em;
`;

const PlateTableRow = styled.tr`
  transition: all 0.25 ease;
  &:hover {
    background: var(--lightBluish);
  }
`;

const PlateTableHead = styled.thead``;

const PlateTableBody = styled.tbody``;

const PlateTableFooter = styled.tfoot``;

export {
  PlateContainer,
  PlateTableHead,
  PlateTableBody,
  PlateTable,
  PlateTableCol,
  PlateTableCell,
  PlateTableRow,
  PlateTableFooter,
  TableContainer,
};
