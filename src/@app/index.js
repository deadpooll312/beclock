import * as React from 'react';
import store from './store';
import RouterContainer from './router';
import { Provider } from 'mobx-react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5fddff',
            main: '#2480ff',
            dark: '#0c4dac',
            contrastText: '#ffffff'
        }
    }
});


const App = React.memo(
    props => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={4}>
                        <RouterContainer/>
                    </SnackbarProvider>
                </ThemeProvider>
            </Provider>
        );
    }
);

export default App;
