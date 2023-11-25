import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import StyledTableCell from './StyledTableCell';
import StyledTableRow from './StyledTableRow';

import {
  styledPaperOverride,
  styledHeaderCellOverride,
  styledDataCellOverride,
} from './stylesOverride';

//
function TransactionHistory({ items }) {
  return (
    <TableContainer component={Paper} sx={styledPaperOverride}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={styledHeaderCellOverride}>
              Type
            </StyledTableCell>
            <StyledTableCell sx={styledHeaderCellOverride}>
              Amount
            </StyledTableCell>
            <StyledTableCell sx={styledHeaderCellOverride}>
              Currency
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <StyledTableRow key={id}>
              <StyledTableCell sx={styledDataCellOverride}>
                {type}
              </StyledTableCell>
              <StyledTableCell sx={styledDataCellOverride}>
                {amount}
              </StyledTableCell>
              <StyledTableCell sx={styledDataCellOverride}>
                {currency}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionHistory;
