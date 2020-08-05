import React, { Component } from 'react';
import {
    Container,
    CssBaseline,
    Link,
    Button,
    Grid,
    Fab
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GoalCard from '../GoalCard/GoalCard';
import goalService from '../../utils/goalService';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
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
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
});


class Goals extends Component {

    async componentDidMount() {
        const goals = await goalService.getGoals();
        this.props.handleUpdateGoals(goals);
    }

    handleRemoveGoal = async id => {
        const goals = await goalService.removeGoal(id);
        this.props.handleUpdateGoals(goals);
    }

    render() {

        const goalCards = this.props.userGoals.map((goal, idx) => (
            <GoalCard 
                key={idx}
                name={goal.name}
                description={goal.description}
                goalDate={goal.goalDate}
                tasks={goal.tasks}
                goalId={goal._id}
                handleRemoveGoal={this.handleRemoveGoal}
            />
        ))

        return (
            <div style={{textAlign: 'center'}} className={this.props.classes.paper}>
                { this.props.userGoals.length > 0 ? 
                <Container>
                <CssBaseline />
                    <Grid 
                        spacing={10}
                        style={{padding: '24px'}}
                    >
                        { goalCards }
                    </Grid>
                    </Container>
                :
                    <Container>
                        <CssBaseline />
                        <div className={this.props.classes.paper}>
                            <h1>You have no goals! <span role="img" aria-label="sad with sweat">😓</span> Add some!</h1>
                            <Link href="/addgoal">
                                <Button 
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={this.props.classes.button}
                                >
                                    Add Goals
                                </Button>
                            </Link>
                        </div>
                    </Container>
                }
                <Fab aria-label="add goal" className={this.props.classes.fab} color="primary" href="/addgoal">
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default withStyles(styles)(Goals);