import React from 'react';
import {
    Container,
    CssBaseline,
    Link,
    Button
} from '@material-ui/core/';
import Layout from '../../components/Layout/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Goals from '../../components/Goals/Goals';


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


export default function GoalsPage(props) {
    
    const classes = useStyles();
    
    return (
        <Layout
        title={props.title}
        pageTitle="Goals"
        keywords="aaron, guyett, goals, page"
        description="View your goals and see popular goals on the Scsr.ly platform."
        user={props.user}
        handleLogout={props.handleLogout}
        quote={props.quote}
        quoteAuth={props.quoteAuth}
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
    >
            {props.user &&
                <Container maxwidth="md">
                    <Goals 
                        user={props.user}
                        userGoals={props.userGoals}
                        handleUpdateGoals={props.handleUpdateGoals}
                    />
                </Container>
            }
            {!props.user &&
                <Container>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <h1>Please login to view your goals.</h1>
                        <Link href="/login">
                            <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                </Container>
            }
    </Layout>
    )
}
