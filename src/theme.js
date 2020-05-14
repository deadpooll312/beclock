import {createMuiTheme} from "@material-ui/core";
import { lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: lightBlue[600],
            main: lightBlue[700],
            dark: lightBlue[900],
            contrastText: '#ffffff'
        }
    }
});

export default theme;