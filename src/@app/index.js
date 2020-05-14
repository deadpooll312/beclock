import * as React from 'react';
import store from './store';
import RouterContainer from './router';
import { Provider } from 'mobx-react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import theme from '../theme';


const App = React.memo(
    props => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <SnackbarProvider maxSnack={4}>
                        <RouterContainer/>
                    </SnackbarProvider>
                </ThemeProvider>
            </Provider>
        );
    }
);

export default App;
