import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
  StyledTableContainer,
  StyledTableCell,
  StyledTableRow,
} from './TransactionHistory.styled';

//
function TransactionHistory({ items }) {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Currency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <StyledTableRow key={id}>
              <StyledTableCell>{type}</StyledTableCell>
              <StyledTableCell>{amount}</StyledTableCell>
              <StyledTableCell>{currency}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default TransactionHistory;
