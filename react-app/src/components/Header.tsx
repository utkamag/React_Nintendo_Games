import React from 'react';
import {Toolbar, AppBar, Typography, ThemeProvider, createTheme, Container} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom"


const theme = createTheme({
    palette: {
        primary: {
            main: '#e60013',
        },
        secondary: {
            main: '#f0b900',
        },
    },
});

export const Header = () => {


    return (
        <ThemeProvider theme={theme}>
            <Container>
                <AppBar color="primary">
                    <Toolbar sx={{padding: "10px"}}>
                        <Typography variant="h4" sx={{flexGrow: 1}}>React_Nintendo_Games</Typography>
                        <Link to={"/"}>
                            <IconButton>
                                <HomeIcon color="secondary" fontSize="large"/>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Container>
        </ThemeProvider>
    );
};
