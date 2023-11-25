import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(148, 154, 164, 0.26)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default StyledTableRow;
