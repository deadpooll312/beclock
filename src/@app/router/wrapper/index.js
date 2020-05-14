import React from 'react';
import { Route } from 'react-router-dom';
import RouteRenderer from "./renderer";

const DefaultRoute = React.forwardRef(props => {
    const { path, exact, component, ...rest } = props;
    return <Route
        path={path}
        exact={exact}
        render={routerProps => <RouteRenderer routerProps={routerProps} component={component} {...rest} />}
    />;
});

export default DefaultRoute;