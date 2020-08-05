import React, { Component } from 'react';
import {
    Container,
    CssBaseline,
    Link,
    Button,
    Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GoalCard from '../GoalCard/GoalCard';
import goalService from '../../utils/goalService';


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
});


class Goals extends Component {

    async componentDidMount() {
        const goals = await goalService.getGoals();
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
            />
        ))

        return (
            <div style={{textAlign: 'center'}} className={this.props.classes.paper}>
                { this.props.userGoals.length > 0 ? /* FIXME: This is where to check if the user has goals in an array */
                    /* FIXME: Map out goals to the following card
                    {goals.map ( goals =>
                        <Grid key={goal.id} item
                            xs={12} sm={6} md={4} xl={3}
                        >
                        <GoalCard
                            key={goal.id}
                            name={goal.name}
                            description={goal.description}
                            goalDate={goal.goalDate}
                            tasks={goal.tasks}
                        )}
                        />
                    */
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
            </div>
        )
    }
}

export default withStyles(styles)(Goals);