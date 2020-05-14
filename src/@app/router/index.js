import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from '../../pages/home';


const RouterContainer = React.memo(
    props => {

        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact={true} component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
);

export default RouterContainer;