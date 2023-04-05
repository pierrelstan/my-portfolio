import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#4A4346'
    },
    error: {
      main: red.A400
    }
  }
});
export default theme;
