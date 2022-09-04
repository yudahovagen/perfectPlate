import styled from "styled-components";

const MicroTableContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

const MicroTable = styled.table`
  background: var(--dark-blue);
  font-family: "Open Sans", sans-serif;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 1em;
`;
const MicroCaption = styled.caption`
  font-size: 1.25rem;
  color: var(--offWhite);
`;
const MicroTableHead = styled.thead``;

const MicroTableBody = styled.tbody`
  font-size: 0.7875rem;
`;
const MicroTableCol = styled.th`
  border-bottom: 1px solid var(--grey-bluish);
  color: var(--yellow-orange);
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
`;

const MicroTableCell = styled.td`
  color: var(--offWhite);
  font-weight: 400;
  padding: 0.65em 1em;
`;

const MicroTableRow = styled.tr`
  transition: all 0.25 ease;
  &:hover {
    background: var(--lightBluish);
  }
`;

export {
  MicroTableContainer,
  MicroTable,
  MicroCaption,
  MicroTableCol,
  MicroTableCell,
  MicroTableRow,
  MicroTableHead,
  MicroTableBody,
};
