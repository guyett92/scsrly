import React, { Component } from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Divider,
    Dialog,
    Fade,
    Backdrop,
    ListItem,
    ListItemText,
    Grid,
    ListItemSecondaryAction,
    IconButton,
    Link,
    Input,
    Snackbar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
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
    link: {
        textDecoration: 'none !important',
    },
});


class GoalCard extends Component {
    
    state= {
        openM: false,
        openN: false,
        editable: true,
        open: false,
        message: '',
        description: this.props.description

    };

    handleEdit = id => {
        if (!this.state.editable) {
            this.setState({editable: true});
            this.handleEditGoalDescClick(id);
        } else {
            this.setState({editable: false});
        }
    }

    handleChange = (e) => {
        this.updateMessage('Making edits...');
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOpen = () => {
        this.setState({openM: true});
    }

    handleClose = () => {
        this.setState({openM: false});
    }

    handleOpenN = () => {
        this.setState({openN: true});
    }

    handleCloseN = () => {
        this.setState({openN: false});
    }

    handleEditGoalDescClick = id => {
        this.props.handleEditGoalDesc(id, this.state.desc);
        console.log('Submitted!');
    }

    handleSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false});
    }  

    updateMessage = (msg) => {
        this.setState({message: msg, open: true});
      }

    render() {

        return (

        <Grid item>
            <Card className={this.props.classes.card}>
                <Link className={this.props.classes.link} href='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'>
                    <CardActionArea>
                        <CardMedia 
                            className={this.props.classes.media}
                            image='https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span><strong>{this.props.tasks.length} tasks to complete</strong></span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <Divider />
                <CardActions
                    style={{justifyContent: 'center'}}
                >
                    <Button 
                        onClick={this.handleOpen}
                        size='small'
                        color='primary'
                    >
                        View tasks
                    </Button>
                    <Button
                        onClick={() => this.props.handleRemoveGoal(this.props.goalId)}
                        size='small'
                        style={{color: '#f44336'}}
                    >
                        Delete Goal
                    </Button>
                    <Button
                        onClick={() => this.handleOpenN()}
                        size='small'
                        color='primary'
                    >
                        Description
                    </Button>
                </CardActions>
                <Dialog
                    open={this.state.openM}
                    onClose={this.handleClose}
                    aria-labelledby="dialog-title"
                    justify="center"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.openM} mountOnEnter unmountOnExit>
                        <div className={this.props.classes.paper}>
                            <div>
                                <Typography component="h2" variant="h2" id="dialog-title">Tasks</Typography>
                                <Divider variant="fullWidth" />
                                {this.props.tasks.map((task, idx) => (
                                    <React.Fragment key={idx}>
                                        {/* Removed the disc from the list by changing the container component */}
                                        <ListItem ContainerComponent="div" className={this.props.classes.list} button onClick={() => this.props.handleUpdateTask(idx, this.props.goalId)}>
                                            <ListItemText style={task.completed ? {textDecoration: 'line-through', color: '#4caf50', opacity: '0.6'} : {textDecoration: 'none', }}>
                                                {idx + 1 + ". " + task.name} <span role='img' aria-label='checkmark'>{task.completed ? '✔' : ''}</span>
                                            </ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete" size="small" onClick={() => this.props.handleDeleteTask(idx, this.props.goalId)}>
                                                    <DeleteRoundedIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </Fade>
                </Dialog>
                <Dialog
                    open={this.state.openN}
                    onClose={this.handleCloseN}
                    aria-label="description"
                    justify="center"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.openN} mountOnEnter unmountOnExit>
                        <div className={this.props.classes.paper}>
                            <div>
                                <Typography component="h2" variant="h2">Goal Description</Typography>
                                <Divider variant="fullWidth" />
                                <ListItem ContainerComponent="div" className={this.props.classes.list}>
                                    <ListItemText>
                                        <form>
                                            <Input 
                                                type="text" 
                                                disabled={this.state.editable} 
                                                onChange={this.handleChange}
                                                name="description" 
                                                value={this.state.description}
                                                component="p" 
                                                variant="body1" 
                                                style={this.state.editable ?
                                                    {color: 'black'} : {color: '#970747'}
                                                }
                                                disableUnderline={this.state.editable ? true : false}
                                            />
                                        </form>
                                    </ListItemText>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="edit goal description" size="small" onClick={() => this.handleEdit(this.props.goalId)}>
                                            <EditRoundedIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider variant="fullWidth" />
                            </div>
                        </div>
                    </Fade>
                </Dialog>
            </Card>
            {this.state.message &&
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                        }}
                        open={this.state.open}
                        autoHideDuration={3000}
                        onClose={this.handleSnackbarClose}
                        message={this.state.message}
                        action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleSnackbarClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                }
        </Grid>
        )
    }
}

export default withStyles(styles)(GoalCard);
