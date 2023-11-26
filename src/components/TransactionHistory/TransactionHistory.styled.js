import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import getDarkColor from 'helpers/getDarkColor';

const StyledTableContainer = styled(TableContainer)(() => {
  return {
    maxWidth: 700,
    margin: '0 auto',
    borderRadius: '10px',
  };
});

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: getDarkColor(),
    color: 'white',
    textAlign: 'center',
    textTransform: 'upperCase',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(148, 154, 164, 0.26)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export { StyledTableCell, StyledTableRow, StyledTableContainer };
