import React from 'react';
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

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
                                <Card sx={{padding: "10px"}}>
                                    <CardContent>
                                    <Typography variant="h5" sx={{padding: "10px"}}>{dat.name}</Typography>
                                    <Typography>Разработчик: {dat.developers}</Typography>
                                    <Typography>Дата релиза в Японии: {dat.releaseDates.Japan}</Typography>
                                    </CardContent>
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