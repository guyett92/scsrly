import React, { useState } from 'react';
import { 
    Typography, 
    Avatar,
    Grid,
    Fade,
    Paper,
    Slide,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@material-ui/core';
import BioEditCard from '../BioEditCard/BioEditCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridItem: {
        minHeight: '10rem',
    },
});


export default function UserHead( {user, bio, handleUserBio, handleBioChange} ) {
    const classes = useStyles();
    const [start, setStart] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit((edit) => !edit);
    }

    const handleChange = () => {
        setStart((prev) => !prev);
    }

    const bioCard = 
    <Card className={classes.gridItem}>
        <CardContent>
            <Typography gutterBottom variant="h4" component="h3">About You</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{user.bio && user.bio.length ? user.bio : `${user.firstName}, you don't have a bio yet! Add one by clicking below.`}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" onClick={handleEdit}>Edit Bio</Button>
        </CardActions>
    </Card>;
 

    return (
        <div>
            <Grid container align="center" spacing={3}>
                <Grid item xs={12}>
                    <Fade in {...{timeout: 1000}}>
                        <Avatar
                            src={user.avatarURL}
                        />
                    </Fade>
                    <Fade in {...{timeout: 2000}}>
                        <Typography variant='h4' component='h4'>Hello, {user.firstName}</Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12}>
                    <Fade in {...{timeout: 3500, onEntered: handleChange}}>
                        <Typography variant='h5' component='h5'>What would you like to do?</Typography>
                    </Fade>
                </Grid>
                <Grid item xs={4}>
                    <Slide in={start} {...{timeout: 4000}} direction="right">
                        <Paper elevation={3}>
                            {!edit ? bioCard 
                            :
                            <BioEditCard
                                user={user}
                                handleEdit={handleEdit}
                            />}
                        </Paper>
                    </Slide>
                </Grid>
                <Grid item xs={4}>
                    <Slide in={start} {...{timeout: 4000}} direction="up">
                        <Paper elevation={3}>
                            Test
                        </Paper>
                    </Slide>
                </Grid>
                <Grid item xs={4}>
                    <Slide in={start} {...{timeout: 4000}} direction="left">
                        <Paper elevation={3}>
                            Test
                        </Paper>
                    </Slide>
                </Grid>
            </Grid>
        </div>
    )
}