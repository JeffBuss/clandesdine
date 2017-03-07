import {
  blueGrey100, lightBlue500,
  pinkA200, teal100, teal600, teal800,
  grey900, white, grey400, darkBlack, red900, red500,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

export default {  
  spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red500,
    primary2Color: red900,
    primary3Color: blueGrey100,
    accent1Color: pinkA200,
    accent2Color: teal100,
    accent3Color: lightBlue500,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: pinkA200,
  },
};
