import * as React from 'react';
import Menu from './SidebarMenu';

import {
    Drawer,
    Hidden
} from '@material-ui/core';


const Sidebar = React.memo(
    props => {
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };

        return <div className={'drawer'}>
            <Hidden smUp implementation={'css'}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: 'paper'
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <Menu />
                </Drawer>
            </Hidden>
            <Hidden smDown implementation={'css'}>
                <Drawer
                    classes={{
                        paper: 'paper',
                    }}
                    variant="permanent"
                    open
                >
                    <Menu />
                </Drawer>
            </Hidden>
        </div>
    }
);

export default Sidebar;
