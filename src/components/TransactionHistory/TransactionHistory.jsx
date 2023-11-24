import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//
function TransactionHistory({ items }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 700,
        margin: '0 auto',
        borderRadius: '10px',
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ textAlign: 'center' }}>Type</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>
              Amount
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>
              Currency
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <StyledTableRow key={id}>
              <StyledTableCell sx={{ textAlign: 'center' }}>
                {type}
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: 'center' }}>
                {amount}
              </StyledTableCell>
              <StyledTableCell sx={{ textAlign: 'center' }}>
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
