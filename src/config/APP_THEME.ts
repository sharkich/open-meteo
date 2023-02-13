import { createTheme } from '@mui/material';
import { grey, lightBlue, lime, orange } from '@mui/material/colors';

/*
$primary-color-dark:   #00796B
$primary-color:        #009688
$primary-color-light:  #B2DFDB
$primary-color-text:   #FFFFFF
$accent-color:         #03A9F4
$primary-text-color:   #212121
$secondary-text-color: #757575
$divider-color:        #BDBDBD
 */

export const APP_THEME = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: lightBlue[800]
        }
      }
    }
  },
  palette: {
    // action: {
    //   active: lightBlue[200],
    //   focus: lightBlue[600],
    //   focusOpacity: 1,
    //   hover: lightBlue[100],
    //   hoverOpacity: 0.7,
    //   selected: lightBlue[300],
    //   selectedOpacity: 1
    // },
    // mode: 'dark',
    primary: {
      // main: teal['400']
      main: lime.A700
    },
    secondary: {
      contrastText: 'white',
      main: orange.A700
    },
    // divider: teal[900],
    // background: {
    //   default: teal[900],
    //   paper: teal[800]
    // }
    text: {
      primary: grey[900],
      secondary: lightBlue[800]
    }
  }
});
