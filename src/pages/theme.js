// src/ui/theme/index.js
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme( {

  palette: {
    primary: { 
      main: '#53c0cc',
      light: "rgb(117, 204, 214)",
      dark: "rgb(58, 134, 142)",
      contrastText: "rgba(0, 0, 0, 0.87)"
   },
   "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    },
    "divider": "rgba(0, 0, 0, 0.12)",
    "secondary": {
      "main": "#8ec460",
      "light": "rgb(164, 207, 127)",
      "dark": "rgb(99, 137, 67)",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
  },
  themeName: 'Shakespeare Mantis Squid'
});

export default theme;
