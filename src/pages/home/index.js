import * as React from 'react';

import {
    Typography,
    Container,
    Grid
} from '@material-ui/core';


const HomePage = React.memo(
    props => {

        return (
            <Container maxWidth="lg">
                <Grid container justify="flex-start" alignContent="center">
                    <Grid item lg={4} md={6} sm={12} xs={12} style={{border: '1px solid #000'}}>
                        <Typography variant="h3">Home page</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} style={{border: '1px solid #000'}}>
                        <Typography variant="h5">lg=4 md=6 sm=12 xs=12</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12} style={{border: '1px solid #000'}}>
                        <Typography variant="h5">lg=4 md=6 sm=12 xs=12</Typography>
                    </Grid>
                </Grid>
            </Container>
        );
    }
);

export default HomePage;