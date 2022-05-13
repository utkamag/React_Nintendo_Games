import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';


const NintendoList: React.FC = () => {


// Массив данных для рендера skeleton

    const apises = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// Стейт для данных с api

    const [apis, setApis] = useState<any[]>([])

// Проверка загрузки сайта

    const [loading, setLoading] = useState<boolean>(false)

// Получаем данные с api

    useEffect(() => {
        fetch("https://api.sampleapis.com/switch/games")
            .then(res => res.json())
            .then(data => setApis(data))
            .then(data => setLoading(true))
    })


    return (
        <div className="data" style={{marginTop: "90px"}}>
            {loading ? (apis.map((data: any) => {
                return (
                    <Container>
                        <Grid container spacing={2} key={data.id}>
                            <Grid item md={12} sx={{marginTop: "20px"}}>
                                <Card sx={{padding: "10px"}}>
                                    <CardContent>
                                        <Typography variant="h5" sx={{padding: "10px"}}>{data.name}</Typography>
                                        <Typography>Разработчик: {data.developers}</Typography>
                                        <Typography>Дата релиза в Японии: {data.releaseDates.Japan}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                )
            })) : (apises.map((data: any) => {
                return (
                    <Container>
                        <Box className="skeleton">
                            <Skeleton className="skeleton_text_base" variant="text"/>
                        </Box>
                    </Container>
                )
            }))

            }
        </div>
    );
};

export default NintendoList;