import React from "react";
import {
    Container,
    Typography,
    CssBaseline,
    Button,
    Grid,
} from "@mui/material";
import banner from '../store_9.jpg'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    content: {
        flexGrow: 1,
        padding: '18px',
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textDecoration: "none",
        backgroundImage: "url(" + banner + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
    },
    heroTitle: {
        display: "flex",
        color: "#ffffff",
    },
    heroDescription: {
        display: "flex",
        color: "#ffffff",
    },
    ctaWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    },
    ctaButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        padding: '6px',
        paddingLeft: '48px',
        paddingRight: '48px',
        color: "#ffffff",
        borderColor: "#ffffff",
    },
}));
const Banner = () => {
    const classes = useStyles();

    return (
        <section id="hero" className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" justifyContent="left">
                <Grid item className={classes.heroTitle}>
                    <Typography variant="h1" style={{ fontWeight: "800" }}>
                        ARISE
                    </Typography>
                </Grid>
                <Grid item className={classes.heroDescription}>
                    <Typography variant="h5">by INFINITAS</Typography>
                </Grid>
                {/* <Grid item>
                    <Button
                        className={classes.ctaButton}
                        size="large"
                        type="button"
                        variant="outlined"
                    >
                        <Typography variant="h5">SHOP NOW</Typography>
                    </Button>
                </Grid> */}
            </Grid>
        </section>
    );
};

export default Banner;
