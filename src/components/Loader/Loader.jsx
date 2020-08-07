import React from 'react';
import {
    CircularProgress,
    Container
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(8),
    },
 }));

function ShowDetail() {
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <CircularProgress color="secondary" />
        </div>
    </Container>
  );
}

export default ShowDetail;