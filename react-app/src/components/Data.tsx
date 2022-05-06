import React from 'react';
import {Box, Card, Container, Grid, Typography} from "@mui/material";

interface apiProps {
    data: any;
}

const NintendoList: React.FC<apiProps> = ({data}) => {
    return (
        <div className="data" style={{marginTop: "90px"}}>
            {data.map((dat: any) => {
                return (
                    <Container>
                        <Grid container spacing={2} key={dat.id}>
                            <Grid item md={12} sx={{marginTop: "20px"}}>
                                <Card>
                                    <Typography sx={{padding: "20px"}}>{dat.name}</Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                )
            })}
        </div>
    );
};

export default NintendoList;