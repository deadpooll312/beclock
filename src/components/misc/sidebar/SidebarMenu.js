import * as React from 'react';
import { inject, observer } from 'mobx-react';


import {
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';

import {LocalAtm, ShowChart, Money} from '@material-ui/icons';


const SidebarMenu = inject('store')(observer(
    ({store, props}) => {

        return (
            <React.Fragment>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <LocalAtm />
                        </ListItemIcon>
                        <ListItemText primary={'ACQUIRING'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ShowChart />
                        </ListItemIcon>
                        <ListItemText primary={'DASHBOARD'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Money />
                        </ListItemIcon>
                        <ListItemText primary={'TRANSACTIONS'} />
                    </ListItem>
                </List>
            </React.Fragment>
        );
    }
));


export default SidebarMenu;
