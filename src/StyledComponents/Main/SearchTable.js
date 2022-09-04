import styled from "styled-components";

const SearchTableContainer = styled.div`
  overflow-y: ${(props) => (props.showTable ? "scroll" : "hidden")};
  margin: 1rem auto;
  border: ${(props) => (props.showTable ? "none" : "none")};
  padding: 0;
`;

const SearchTable = styled.table`
  overflow: auto;
  background: var(--dark-blue);
  font-family: "Open Sans", sans-serif;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 0.5em;
`;

const SearchTableCol = styled.th`
  border-bottom: 1px solid var(--grey-bluish);
  color: var(--yellow-orange);
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SearchTableCell = styled.td`
  color: var(--offWhite);
  font-weight: 400;
  padding: 0.65em 1em;
  max-width: 70ch;
  cursor: pointer;
`;

const SearchTableRow = styled.tr`
  transition: all 0.25 ease;
  &:hover {
    background: var(--lightBluish);
  }
`;

const SearchTableHead = styled.thead``;

const SearchTableBody = styled.tbody``;

const SearchTableFooter = styled.tfoot``;

export {
  SearchTable,
  SearchTableHead,
  SearchTableContainer,
  SearchTableRow,
  SearchTableCol,
  SearchTableCell,
  SearchTableBody,
  SearchTableFooter,
};
