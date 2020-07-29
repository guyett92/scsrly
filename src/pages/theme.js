// src/ui/theme/index.js
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme( {

  palette: {
    primary: { 
      main: '#8BC34A',
      light: "rgb(162, 207, 110)",
      dark: "rgb(97, 136, 51)",
      contrastText: "rgba(0, 0, 0, 0.87)"
   },
    secondary: { main: '#EF5350' }
  },
  themeName: 'Sushi Burnt Sienna Ocean Sunfish',
});

export default theme;
