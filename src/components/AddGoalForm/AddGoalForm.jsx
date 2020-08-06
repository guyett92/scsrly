import React, { Component } from 'react';
import {
    Avatar,
    Button,
    TextField,
    Grid,
    Link,
    Typography,
    CssBaseline,
    Container,
    Fab,
    Snackbar,
    IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import goalService from '../../utils/goalService';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    grid: {
        marginTop: theme.spacing(1),
    },
    task: {
        width: '88%',
    },
    label: {
        marginLeft: '1rem',
    },
});

class AddGoalForm extends Component {

    state = {
        name: '',
        description: '',
        goalDate: `${new Date().toISOString().split('T')[0]}`,
        tasks: [{name: ""}],
    };

    updateMessage = (msg) => {
        this.setState({message: msg, open: true});
      }

    handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false});
    }  

    handleChange = (e) => {
        // TODO: implement in an elegant way
        this.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }

    handleTaskNameChange = idx => (e) => {
        const newTasks = this.state.tasks.map((task, sidx) => {
            if (idx !== sidx) return task;
            return { ...task, name: e.target.value };
        });
        this.setState({ tasks: newTasks });
    }

    handleAddTask = () => {
        this.setState({
            tasks: this.state.tasks.concat([{ name: "" }])
        });
    }

    handleRemoveTask = idx => () => {
        this.setState({
            tasks: this.state.tasks.filter((s, sidx) => idx !== sidx)
        });
    }

    handleAddGoal = async (goal) => {
        await goalService.createGoal(goal);
    }

    /* Verify each field is filled out AND all tasks have content */
    isFormInvalid() {
        return !(this.state.name && this.state.description && this.state.tasks.every(function (e) {
            return e.name;
        }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          this.handleAddGoal(this.state);
          this.props.history.push('/goals');
        } catch (err) {
          this.updateMessage(err.message);
          this.setState({open: true});
            console.log(err);
        }
    }

    render() {
        return (
            <Container maxWidth="xs">
            <CssBaseline />
                <div className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar} alt={`${this.props.user.firstName} ${this.props.userLastName}`} src={this.props.user.avatarURL} />
                    <Typography component="h1" variant="h5">
                        Add a Goal
                    </Typography>
                    <form className={this.props.classes.form} noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Goal Name"
                            name="name"
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="textarea"
                            id="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            multiline
                        />
                        <TextField
                            id="date"
                            label="Target Goal Completion Date"
                            type="date"
                            name="goalDate"
                            defaultValue={new Date().toISOString().split('T')[0]}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                            variant="outlined"
                        />
                        <h4>Add Tasks</h4>
                        {this.state.tasks.map((task, idx) => (
                            <div key={idx}>
                                <TextField
                                    className={this.props.classes.task}
                                    id="task"
                                    name="task"
                                    margin="normal"
                                    value={task.name}
                                    onChange={this.handleTaskNameChange(idx)}
                                />
                                {idx !== 0 &&
                                <Fab size="small" color="secondary" aria-label="remove task" onClick={this.handleRemoveTask(idx)}>
                                    <RemoveIcon />
                                </Fab>
                                }
                            </div>
                        ))}
                        {this.state.tasks[this.state.tasks.length - 1].name &&
                            <div>
                                <Fab color="primary" aria-label="add task" onClick={this.handleAddTask}>
                                    <AddIcon />
                                </Fab>
                                {/* Can add text here if I want to label the button */}
                                <label className={this.props.classes.label}><strong></strong></label>
                            </div>
                        }
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={this.isFormInvalid()}
                            className={this.props.classes.submit}
                        >
                            Submit
                        </Button>
                        <Link href="/goals" className="cancel">
                            <Button 
                            fullWidth
                            variant="contained"  
                            >
                            Cancel
                            </Button>
                        </Link>
                        <Grid container className={this.props.classes.grid}>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Need motivation? Check out these goals!
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {this.state.message &&
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        message={this.state.message}
                        action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                }
            </Container>
        );
    }
}

export default withStyles(styles)(AddGoalForm);