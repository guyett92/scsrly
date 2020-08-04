import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserHead from '../../components/UserHead/UserHead';
import {
    Container, 
    CssBaseline,

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        textDecoration: 'none',
    },
}));

const UserPage = (props) => {

    const classes = useStyles();

    return (
            <Layout
            title={props.title}
            pageTitle={props.user.firstName + " " + props.user.lastName}
            keywords="aaron, guyett, scsr, success"
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
                        <UserHead user={props.user} />
                    </div>
                </Container>
            </Layout>
    )
}

export default UserPage;