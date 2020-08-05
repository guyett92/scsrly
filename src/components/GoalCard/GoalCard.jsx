import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Divider,
    Modal,
    Fade,
    Backdrop
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {

    return {
        margin: 'auto',
        width: '50%',
        maxWidth: '100vw',
        maxHeight: '100%',
        position: 'absolute',
        top: '50%',
        left: '25%',
        transform: 'translate(0, -50%)',
        overflowY: 'auto',
    }
}

const useStyles = makeStyles((theme) => ({
    card: { maxWidth: 345, },
    media: { height: 140, }, 
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '5%',

        },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
}));



export default function GoalCard({ tasks, handleRemoveGoal, name, goalId }) {
    const classes = useStyles();

    const [openM, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const modalB = (
        <div>
            <Typography component="h2" variant="h2" id="modal-title">Tasks</Typography>
            {tasks.map((task, idx) => (
                    <Typography key={idx} variant="body1" component="p" id="modal-description" style={{display: 'flex'}}>
                        {idx + 1 + ". " + task.name} <Button style={{marginLeft: 'auto', color: '#f44336'}}>X</Button>
                    </Typography>
            ))}
        </div>
    );

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' /* Test, do I want a photo? - Yes */
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span><strong>{tasks.length} tasks to complete</strong></span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions
                style={{justifyContent: 'center'}}
            >
                <Button 
                    onClick={handleOpen}
                    size='small'
                    color='primary'
                >
                    View tasks
                </Button>
                <Button
                    onClick={() => handleRemoveGoal(goalId)}
                    size='small'
                    style={{color: '#f44336'}}
                >
                    Delete Goal
                </Button>
                <Button
                    href='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' /* This needs to be the same as the image link above. Can do a small avatar instead? */
                    size='small'
                    color='primary'
                >
                    View photo
                </Button>
            </CardActions>
            <Modal
                open={openM}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                justify="center"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openM} mountOnEnter unmountOnExit>
                    <div style={getModalStyle()} className={classes.paper}>
                        {modalB}
                    </div>
                </Fade>
            </Modal>
        </Card>

    )
}