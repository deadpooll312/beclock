import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './wrapper';

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