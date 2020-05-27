import * as React from 'react';
import { Sidebar } from "../../../components";


const RouteRenderer = React.memo(
    props => {
        const { routerProps, component: Component, ...rest } = props;

        return (
            <div className="main-container">
                <Sidebar {...routerProps} />
                <section className="content">
                    <Component {...routerProps} {...rest} />
                </section>
            </div>
        );
    }
);

export default RouteRenderer;
