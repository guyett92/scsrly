import React from 'react';
import Layout from '../../components/Layout/Layout';
import {
    Container, 
    CssBaseline,
    Typography,
    
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        textDecoration: 'none',
    },
}));

const ViewGoalsPage = (props) => {

    const classes = useStyles();

    return (
            <Layout
            title={props.title}
            pageTitle={"View Goals"}
            keywords="aaron, guyett, scsr, success"
            description="Your user page serves you with the controls you need to be successful."
            user={props.user}
            handleLogout={props.handleLogout}
            quote={props.quote}
            quoteAuth={props.quoteAuth}
            open={props.open}
            onOpen={props.onOpen}
            onClose={props.onClose}
            >
                <Container>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h1">Coming soon!</Typography>
                    </div>
                </Container>
            </Layout>
    )
}

export default ViewGoalsPage;