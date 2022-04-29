import React from 'react';
import {Box, Card, Grid, Typography} from "@mui/material";

const Games = () => {
    return (
        <Grid container>
            <Grid item md={4}>
                <Card>
                    <Typography sx={{marginTop: 20}}>Hello</Typography>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Games;