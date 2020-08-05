import React from 'react';
import {
    Typography,
    CssBaseline,
    Grid,
    Slide,
    Button,
    Zoom
} from '@material-ui/core';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'stretch',
        backgroundImage: `url(${'img/home-background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '80vh',
        backgroundColor: 'rgba(64, 64, 64, 0.6) !important',
        backgroundBlendMode: 'color',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const HomePage = (props) => {
    const classes = useStyles();
    
    return (
        <Layout
            title={props.title}
            pageTitle="Home"
            keywords="aaron, guyett, scsr.ly, successorly"
            description="Begin carving your way towards success with Scsr.ly, the world's first social media success application."
            user={props.user}
            handleLogout={props.handleLogout}
            quote={props.quote}
            quoteAuth={props.quoteAuth}
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
        >
            <div className={classes.root}>
            <CssBaseline />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grid 
                container 
                spacing={0}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Slide
                    direction="right"
                    in
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        style={{color: 'white'}}
                    >
                        Welcome&nbsp;
                    </Typography>
                </Slide>
                <Slide
                    direction="left"
                    in
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        style={{color: 'white'}}
                    >
                        to Scsr.ly
                    </Typography>
                </Slide>
            </Grid>
            <br />
            <Grid
                container 
                spacing={0}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Zoom
                        in
                    >
                        <Typography 
                            component="h2" 
                            variant="h4"
                            style={{color: 'white', fontStyle: 'italic' }}
                        >
                            A place to share success.
                        </Typography>
                    </Zoom>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Grid item>
                    <Button
                        size="large"
                        variant="outlined" 
                        style={{color: 'white'}} 
                        href={props.user ? '/goals' : '/login'}
                    >
                        Get Started
                        {/* Make Fab in future for media */}
                    </Button>
                </Grid>
            </Grid>     
            </div>
        </Layout>
    )
}

export default HomePage;